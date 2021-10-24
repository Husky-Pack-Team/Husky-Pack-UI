import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './Content/SettingsScreen'
import HomeScreen from './Content/HomeScreen'
import TaskScreen from './Content/TaskScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState, useEffect} from "react";
import {View, Keyboard, TouchableWithoutFeedback} from "react-native";
import { addSignPrefixAndSuffix } from 'react-native-currency-input/src/utils/formatNumber';

export default function Dashboard({ navigation }) {
  const Tab = createBottomTabNavigator();

  const DismissKeyboard = ({ children }) => (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{width: '100%', height: '100%'}}>
            {children}
          </View>
      </TouchableWithoutFeedback>
  );

  function fetchName() {
      //todo fetch username, id, etc
      return "Lawrence Qupty"
  }

  const [name, setName] = useState("Lawrence Qupty");
  const [field, setField] = useState("Computer Science");
  const [interests, setInterests] = useState("Centering Buttons")
  const [id, setId] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  // Stores 'tasks' state, an obj representing all tasks around campus
  const [tasks, setTasks] = useState([]);

  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(true);

  async function getTasks() {
      const res = fetch('https://huskypackapi.azurewebsites.net/api/task?function=list')
      const json = await res.json();
      newTasks = []
      for (let task of json) {
        let res2 = await fetch('https://huskypackapi.azurewebsites.net/api/user?function=info&id=' + task.User)
        let name = await res2.text();
        let dif = (Math.random() - 0.5)/10
        newTasks.push({
          "name": name,
          "title": task.title,
          "description": task.description,
          "price": task.cost,
          "field": "Computer Science",
          "verified": true,
          "latlng": { "latitude" : 47.653293783515785 + dif, "longitude" :  -122.3057501213684 + dif},
          "id": task.User,
          "acceptor": ""
        })        
      }
      setTasks(newTasks)
  }

  // This will fire only on mount.
  // Updates 'tasks' state according to database.
  useEffect(() => {

    window.setTimeout(() => {
      getTasks()
    }, 1000)

  }, []);

  function numMyTasks() {
    var num = 0;
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      if (task.name == fetchName()) {
        num++;
      }
    }
    return num;
  }

  const numTasks = numMyTasks();

  return (
    <DismissKeyboard>
        <NavigationContainer independent="true">
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Settings"
                children={() => <SettingsScreen
                    name={name}
                    setName={setName}
                    field={field}
                    setField={setField}
                    interests={interests}
                    setInterests={setInterests}
                />}
                options={{
                  tabBarLabel: 'Settings',
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                  ),
                }}
            >
            </Tab.Screen>
            <Tab.Screen
                name="Home"
                children={() => <HomeScreen
                    tasks={tasks}
                    userName={name}
                    id={id}
                />}
                options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                  ),
                }}
            />
            <Tab.Screen
                name="My Tasks"
                children={() => <TaskScreen
                    tasks={tasks}
                    userName={name}
                />}
                options={{
                  tabBarLabel: 'My Tasks',
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={size} />
                  ),
                  tabBarBadge: numMyTasks()
                }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </DismissKeyboard>
    )
}


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './Content/SettingsScreen'
import HomeScreen from './Content/HomeScreen'
import TaskScreen from './Content/TaskScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState, useEffect, useRef} from "react";

export default function Dashboard({ navigation }) {
  const Tab = createBottomTabNavigator();

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
    const taskResponse = fetch('https://huskypackapi.azurewebsites.net/api/task?function=list', {
      method: 'GET'
    });

    console.log('JHEEEEEEEEEEEEEEEEEE')

    if(taskResponse.ok) {
      alert(JSON.stringify(taskResponse))

      setTasks(taskResponse.json);
    }
  }

  // This will fire only on mount. 
  // Updates 'tasks' state according to database.
  useEffect(() => {


    //
    // TODO: fetch back-end tasks on timer
    // Temporary:

    if (shouldUpdateUserList) {
        alert("jere")
      getTasks().then()
      setShouldUpdateUserList(false);
    }


  }, []);

  return (
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
                  addTask={() => setShouldUpdateUserList(true)}
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
                  updateTasks={() => setShouldUpdateUserList(true)}
              />}
              options={{
                tabBarLabel: 'My Tasks',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}


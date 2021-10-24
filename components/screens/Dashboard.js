import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './Content/SettingsScreen'
import HomeScreen from './Content/HomeScreen'
import TaskScreen from './Content/TaskScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState, useEffect} from "react";
import {View, Keyboard, TouchableWithoutFeedback} from "react-native";

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

  // This will fire only on mount. 
  // Updates 'tasks' state according to database.
  useEffect(() => {
    // 
    // TODO: fetch back-end tasks on timer
    // Temporary:
    setTasks([
      {
        "name": "Amit Ferman",
        "title": "Coffee",
        "description": "Need coffee from Microsoft Cafe.",
        "when": "ASAP",
        "price": 7.50,
        "field": "Computer Science",
        "verified": true,
        "latlng": { "latitude" : 47.653293783515785, "longitude" :  -122.3057501213684},
        "id": 123,
        "acceptor": ""
      },
      {
        "name": "Daniel Berezansky",
        "title": "Food",
        "description": "Need Salmon to feed my bear.",
        "when": "14:00",
        "price": 50.00,
        "field": "Computer Science",
        "verified": true,
        "latlng": { "latitude" : 47.65525229281891, "longitude" :  -122.30880783957718},
        "id": 456,
        "acceptor": ""
      },
      {
        "name": "Lawrence Qupty",
        "title": "Moving",
        "description": "Need someone to help move my sofa.",
        "when": "18:00",
        "price": 10.00,
        "verified": false,
        "latlng": { "latitude" : 47.6577888506854, "longitude" :  -122.30641530919283},
        "id": 789,
        "acceptor": ""
      }
    ])
  }, [])

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
                }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </DismissKeyboard>
    )
}


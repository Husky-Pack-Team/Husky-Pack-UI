import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './components/SettingsScreen'
import HomeScreen from './components/HomeScreen'
import TaskScreen from './components/TaskScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState, useEffect} from "react";


const Tab = createBottomTabNavigator();

function App() {
  async function fetchName() {
      //todo fetch username
      return "Lawrence Qupty"
  }

  const [name, setName] = useState("Lawrence Qupty");

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
        "verified": true,
        "latlng": { "latitude" : 47.653293783515785, "longitude" :  -122.3057501213684},
        "id": 123
      },
      {
        "name": "Daniel Berezansky",
        "title": "Food",
        "description": "Need Salmon to feed my bear.",
        "when": "14:00",
        "price": 50.00,
        "verified": true,
        "latlng": { "latitude" : 47.65525229281891, "longitude" :  -122.30880783957718},
        "id": 456
      },
      {
        "name": "Lawrence Qupty",
        "title": "Moving",
        "description": "Need someone to help move my sofa.",
        "when": "18:00",
        "price": 10.00,
        "verified": false,
        "latlng": { "latitude" : 47.6577888506854, "longitude" :  -122.30641530919283},
        "id": 789
      }
    ])
  }, [])

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
              name="Settings"
              children={() => <SettingsScreen
                  name={name}
                  setName={setName}
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
  );
}

export default App;

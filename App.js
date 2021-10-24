import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './components/SettingsScreen'
import HomeScreen from './components/HomeScreen'
import TaskScreen from './components/TaskScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from "react";


const Tab = createBottomTabNavigator();

function App() {
    async function fetchName() {
        //todo fetch username
        return "Lawrence"
    }

    const [name, setName] = useState("Lawrence");

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
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="MyTasks" 
          component={TaskScreen} 
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

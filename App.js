import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './components/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from './components/screens'
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";

const Stack = createStackNavigator();

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{width: '100%', height: '100%'}}>
        {children}
      </View>
    </TouchableWithoutFeedback>
);


function App() {



  return (
      <DismissKeyboard>
        <Provider theme={theme}>
            <NavigationContainer independent="true">
              <Stack.Navigator
                initialRouteName="StartScreen"
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen
                  name="ResetPasswordScreen"
                  component={ResetPasswordScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
        </DismissKeyboard>
    )
  }

export default App;

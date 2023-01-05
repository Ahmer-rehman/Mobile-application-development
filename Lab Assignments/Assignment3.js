import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from './Component/Profile';
import { Login } from './Component/Login';
import { Register } from './Component/Register';



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    >
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

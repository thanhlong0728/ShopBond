import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { RegisterScreen , LoginScreen } from '../screens'

const Stack = createStackNavigator();

const AuthStackScreen=()=> {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
    >
      <Stack.Screen name="LoginScreen" component={ LoginScreen } />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackScreen;
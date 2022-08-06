import React from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
import { StackNavigation } from './StackNavigation';

export type RootAuthNavigationProps = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    StackNavigation: undefined,
}

const Stack = createStackNavigator<RootAuthNavigationProps>();
export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="StackNavigation" component={StackNavigation} />
    </Stack.Navigator>
  )
}

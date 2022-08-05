import React from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
import { CustomerStackNavigation } from './CustomerStackNavigation';
import { AdministratorStackNavigation } from './AdministratorStackNavigation';

export type RootAuthNavigationProps = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    CustomerStackNavigation: undefined,
    AdministratorStackNavigation: undefined,
}

const Stack = createStackNavigator<RootAuthNavigationProps>();
export const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="CustomerStackNavigation" component={CustomerStackNavigation} />
      <Stack.Screen name="AdministratorStackNavigation" component={AdministratorStackNavigation} />
    </Stack.Navigator>
  )
}

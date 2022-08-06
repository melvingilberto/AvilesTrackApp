import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { CreateOrderScreen } from '../screens/createOrder/CreateOrderScreen';
import { AuthNavigation } from './AuthNavigation';

export type RootNavigationProps = {
  HomeScreen: undefined,
  CreateOrderScreen: undefined,
  AuthNavigation: undefined
}

const Stack = createStackNavigator<RootNavigationProps>();
export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateOrderScreen" component={CreateOrderScreen} />
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
    </Stack.Navigator>
  )
}

import React from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { HomeCustomerScreen } from '../screens/customer/home/HomeCustomerScreen';
import { CreateOrderCustomerScreen } from '../screens/customer/createOrder/CreateOrderCustomerScreen';

export type RootCustomerNavigationProps = {
  HomeCustomerScreen: undefined,
  CreateOrderCustomerScreen: undefined,
}

const Stack = createStackNavigator<RootCustomerNavigationProps>();
export const CustomerStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeCustomerScreen" component={HomeCustomerScreen} />
      <Stack.Screen name="CreateOrderCustomerScreen" component={CreateOrderCustomerScreen} />
    </Stack.Navigator>
  )
}

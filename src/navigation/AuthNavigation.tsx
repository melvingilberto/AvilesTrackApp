import React, { useContext } from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { RegisterScreen } from '../screens/register/RegisterScreen';
import { StackNavigation } from './StackNavigation';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/loading/LoadingScreen';

export type RootAuthNavigationProps = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    StackNavigation: undefined,
}

const Stack = createStackNavigator<RootAuthNavigationProps>();
export const AuthNavigation = () => {

  const { status } = useContext( AuthContext );
  if ( status === 'checking' ) return <LoadingScreen />

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: '#fff'
        }
      }}
    >

      

      {
        (status !== 'authenticated') 
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            </>
          )
          : (
            <Stack.Screen name="StackNavigation" component={StackNavigation} />
          )
      }


    </Stack.Navigator>
  )
}
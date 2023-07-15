import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import GuestsScreen from '../screens/Guests';
import DestinationSearchScreen from '../screens/DestinationSearch';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={HomeTabNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='Guests' 
                component={GuestsScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
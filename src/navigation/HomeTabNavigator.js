import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

import HomeScreen from '../screens/Home';
import ExploreNavigator from './ExploreNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{activeTintColor: 'red'}}>
        <Tab.Screen 
            name={"Explore"}
            component={ExploreNavigator}
            options={{
                tabBarIcon: ({}) => {
                    <Fontisto name='search' size={25}/>;
                    
                },
                headerShown: false
            }}
        />
        <Tab.Screen 
            name={"Saved"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <FontAwesome name='heart-o' size={25} />;
                },
                headerShown: false
        }}
        />
        <Tab.Screen 
            name={"Airbnb"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <FontAwesome5 name='airbnb' size={25}  />;

                },
                headerShown: false
            }}
        />
        <Tab.Screen 
            name={"Messages"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <Feather name='message-square' size={25} />;
                },
                headerShown: false
            }}
        />
        <Tab.Screen 
            name={"Profile"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <EvilIcons name='user' size={25} />;
                }
            }}
        />
    </Tab.Navigator>
  )
}

export default HomeTabNavigator
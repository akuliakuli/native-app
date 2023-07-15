import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: "#f15454"
    }}>
        <Tab.Screen 
            name={"Home"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <Fontisto name='search' size={25}/>;

                }
            }}
        />
        <Tab.Screen 
            name={"Saved"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <FontAwesome name='heart-o' size={25} color={color} />;
                }
        }}
        />
        <Tab.Screen 
            name={"Airbnb"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <FontAwesome5 name='airbnb' size={25} color={color} />;

                }
            }}
        />
        <Tab.Screen 
            name={"Messages"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <Feather name='message-square' size={25} color={color} />;
                }
            }}
        />
        <Tab.Screen 
            name={"Profile"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({}) => {
                    <EvilIcons name='user' size={25} color={color} />;
                }
            }}
        />
    </Tab.Navigator>
  )
}

export default HomeTabNavigator
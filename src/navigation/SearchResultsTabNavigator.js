import { View, Text } from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import React from 'react'
import SearchResultScreen from '../screens/searchResult';

const Tab = createMaterialTopTabNavigator();
// AIzaSyChbeX0C3xH1xlScRwg7SfV3-DsD8oq1no
const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'#f15454',
        tabBarIndicatorStyle:{
            backgroundColor:'#f15454'
        }
    }}>
        <Tab.Screen 
            name={"List"}
            component={SearchResultScreen}
        />
        <Tab.Screen 
            name={"Map"}
            component={SearchResultScreen}
        />
    </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator
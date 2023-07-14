/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/post';
import feed from './assets/data/feed';
import SearchResultScreen from './src/screens/searchResult';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';

const App = () => {
  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
      <SafeAreaView>
        <GuestsScreen />
      </SafeAreaView>    
    </>
  );
};
export default App
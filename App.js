/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler'
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import Router from './src/navigation/Router';


const App = () => {
  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
    <Router />
    </>
  );
};
export default App
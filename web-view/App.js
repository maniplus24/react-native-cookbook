import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from "react-navigation-stack";

import HomeScreen from './HomeScreen'
import BrowserScreen from './BrowserScreen'

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    }),
  },
  Browser: {
    screen: BrowserScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    }),
  },
});

const App = createAppContainer(MainNavigator);

export default App;
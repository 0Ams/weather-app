import React, { Component } from 'react'
import { Image, View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    GetWeather: LoadingScreen,
  },
  {
    initialRouteName: 'Home',
  }
)
export default createAppContainer(AppNavigator)

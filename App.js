import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoadingScreen from './screens/LoadingScreen';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title='Getting Weather'
          onPress={() => this.props.navigation.navigate('GetWeather')} />
      </View>
    )
  }
}
class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button
          title='Go Home screen'
          onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}
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

import React, { Component } from 'react'
import { Image, View, Text, Button } from 'react-native'

export default class DetailsScreen extends Component {
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
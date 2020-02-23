import React, { Component } from 'react'
import { Image, View, Text, Button } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Image
              source={
                require('../assets/images/10ms_logo_1024.png')
              }
          style={{ width: 200, height: 160, alignItems: 'center',
                   resizeMode: 'contain', marginTop: -30, marginBottom: -30, marginLeft: -10 }}
        />
        <MaterialCommunityIcons
          name={"play-circle-outline"}
          size={30}
          title="Button with icon object"
          style={{marginTop: 20}}
          onPress={() => this.props.navigation.navigate('GetWeather')}
        />
        <Button
          title='Getting Current Weather'
          onPress={() => this.props.navigation.navigate('GetWeather')} />
      </View>
    )
  }
}
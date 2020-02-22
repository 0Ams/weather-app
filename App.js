import React, { Component } from 'react'
import { ActivityIndicator, AppRegistry, Image, StyleSheet, Text, View, StatusBar } from 'react-native'
import Weather from "./Weather"
const API_KEY = "1c1ecff2a38af57394a8c2482f78b651"

export default class App extends Component {
  state = {
    // 날씨 정보 받았는지 알려주는 indicator 필요
    // 위치 정보가 확인되면 isLoaded = true
    isLoaded: false,
    error: null,
    temp: null,
    name: null
  }

  // react-native는 navigator라는 오브젝트가 있다 like google chrome's navigator
  // 위치 정보 확인 후 isLoaded 정보 변경
  // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드.
  componentDidMount() {
    this._getCurrentLocation();
  }

  _getCurrentLocation() {
    return navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },

      error => {
        this.setState({
          error: error
        })
      }
    )
  }

  _getWeather = (lat, lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        temp: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }

  render() {
    const { isLoaded, error, temp, name } = this.state;
    return (
      <View style={styles.Container}>
        <StatusBar hidden={true} barStyle="dark-content" />
        { isLoaded ? (<Weather temp={Math.floor(temp - 273.15)} weatherName={name} />) : (
          <View style={styles.Loading} >
            <Image
              source={
                require('./assets/images/10ms_logo_1024.png')
              }
              style={styles.LoadingImage}
            />
            <Text style={styles.LoadingText}>Getting the weather</Text>
            {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
          </View> 
        )}
      </View >
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  ErrorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  Loading: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    paddingLeft: 25,
  },
  LoadingText: {
    fontSize: 38,
    color: 'rgba(96,100,109, 0.8)',
    marginBottom: 24
  },
  LoadingImage: {
    width: 100,
    height: 80,
    alignItems: 'center',
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
})

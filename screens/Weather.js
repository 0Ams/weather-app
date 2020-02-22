import React, { Component } from "react"
import { StyleSheet, Text, View, Button } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'
// import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import PropTypes from "prop-types"

const weatherCases = {
    Rain: {
        colors:['#FFFFFF', '#6DD5FA', '#2980B9'],
        title: 'Raining like a MF',
        subtitle: 'For more info look outside',
        icon: 'weather-rainy'
    },
    Clear: {
        colors:['#f5af19', '#f12711'],
        title: 'Sunny',
        subtitle: 'So Hot',
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors:['#00ECBC', '#007ADF'],
        title: 'Thunderstorm in the house',
        subtitle: 'Snow Rain Wind',
        icon: 'weather-lightning'
    },
    Clouds: {
        colors:['#D7D2CC', '#304352'],
        title: 'Clouds',
        subtitle: 'I know, boring',
        icon: 'weather-cloudy'
    },
    Snow: {
        colors:['#7DE2FC', '#B9B6E5'],
        title: 'Cold as balls',
        subtitle: 'It snowed',
        // icon: 'ios-snow',
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: 'Drizzle',
        subtitle: 'It drizzled',
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: 'Haze',
        subtitle: 'Haze',
        icon: 'weather-hail'
    },
    Mist: {
        colors:['#BDC3C7', '#2C3E50'],
        title: 'Mist',
        subtitle: 'Mist 가득',
        icon: 'weather-fog'
    }
}

function Weather({ weatherName, temp }) {
    // console.log("ddd" + weatherName);
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>

            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}°C</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title} >{weatherCases[weatherName].title}</Text>
                <Text style={styles.subTitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "transparent" // 이걸 해야 아이콘이 보임 그래야 child인 icon이 보이는거.
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        marginBottom: 24,
        marginTop: 10,
        color: "white"
    },
    title: {
        fontSize: 50,
        backgroundColor: "transparent",
        marginBottom: 10,
        color: "white",
        fontWeight: '600'
    },
    subTitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        marginBottom: 24,
        color: "white"
    }
})
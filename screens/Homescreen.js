import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native'
import { HEIGHT, WIDTH } from '../constants/config'

export default function Homescreen({ navigation }) {
    return (
        <View style={{ ...styles.mainView }}>
            <Text style={{ color: 'black', fontSize: 24 }}>Click On The Button To Navigate</Text>

            <View style={{ ...styles.viewStyle }}>
                <TouchableOpacity style={{ ...styles.touchableOpacityStyle }} onPress={() => {
                    navigation.navigate('Orderlist');
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Order Screen</Text>
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.viewStyle }}>
                <TouchableOpacity style={{ ...styles.touchableOpacityStyle }} onPress={() => {
                    navigation.navigate('Paymentpage')
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Payment Screen</Text>
                </TouchableOpacity>
            </View>
            <View style={{ ...styles.viewStyle }}>
                <TouchableOpacity style={{ ...styles.touchableOpacityStyle }} onPress={() => {
                    navigation.navigate('Orderdetails')
                }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Order Details Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        height: HEIGHT,
        width: WIDTH,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    touchableOpacityStyle: {
        backgroundColor: '#CE1567',
        height: HEIGHT * 0.1 - 19,
        width: WIDTH * 0.9 + 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        borderRadius: 10
    },
    viewStyle: {
        marginVertical: 6,
        justifyContent: 'center',
        padding: 6
    }
})
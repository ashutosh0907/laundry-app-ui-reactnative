import { View, Text, StatusBar, useColorScheme, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { WIDTH } from '../constants/config';
import { BACK, TRUCK, UP, LINE, ORDER, GREEN } from '../constants/imagepath'

export default function Orderdetails({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'dark-content' : 'light-content'}
                backgroundColor={styles.backgroundStyle.backgroundColor}
            />

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.backgroundStyle}>
                <View>
                    <View style={styles.backgroundStyle}>
                        <View style={{ width: WIDTH, flexDirection: 'row', padding: 10 }}>
                            <View>
                                <TouchableOpacity onPress={() => {
                                    navigation.pop()
                                }}>
                                    <Image source={BACK}
                                        style={{ ...styles.backStyle }}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ ...styles.headingTopView, }}>
                                <Text style={{ ...styles.topHeading }}>Orders Detail</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={TRUCK} style={{ height: 190, width: 190 }} />
                        </View>
                        <View style={{ width: WIDTH, justifyContent: 'center', alignItems: 'center', width: WIDTH }}>
                            <Text style={{ fontSize: 16, color: '#38106A' }}>Thanks for choosing Us!</Text>
                            <Text style={{ color: '#595757' }}>Your pickup has been confirmed</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.totalStyle, marginVertical: 16 }}>
                        <View style={{ padding: 8 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 17, color: '#38106A' }}>Order #123</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}><Text><Text>(2 bags)</Text></Text></View>
                            </View>
                            <Text style={{ marginVertical: 4 }}>11:35 AM, Thu, 15 Jun 2019</Text>
                        </View>
                        <Image source={LINE} style={{ width: WIDTH * 0.84 }} />
                        <View style={{ padding: 7 }}>
                            <View style={{ padding: 5 }}>
                                <View style={{ flexDirection: 'row', width: WIDTH }}>
                                    <Text style={{ fontSize: 17, color: '#38106A' }}>Wash & Fold</Text>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: WIDTH * 0.5 + 13 }}>
                                        <Image source={UP} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: WIDTH }}>
                                    <Text style={{ fontSize: 15, color: '#292929' }}>2 x  Tshirt  (Men)</Text>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH }}>
                                        <Text style={{ fontSize: 15, color: '#CE1567' }}>$6</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', width: WIDTH }}>
                                    <Text style={{ fontSize: 15, color: '#292929' }}>3 x  Jean  (Men)</Text>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH }}>
                                        <Text style={{ fontSize: 15, color: '#CE1567' }}>$6</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ flexDirection: 'row', width: WIDTH }}>
                                <Text style={{ fontSize: 17, color: '#38106A' }}>Wash & Iron</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: WIDTH * 0.5 + 13 }}>
                                    <Image source={UP} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: WIDTH }}>
                                <Text style={{ fontSize: 15, color: '#292929' }}>2 x  Tshirt  (Men)</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH }}>
                                    <Text style={{ fontSize: 15, color: '#CE1567' }}>$6</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: WIDTH }}>
                                <Text style={{ fontSize: 15, color: '#292929' }}>3 x  Jean  (Men)</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH }}>
                                    <Text style={{ fontSize: 15, color: '#CE1567' }}>$6</Text>
                                </View>
                            </View>
                        </View>
                        <Image source={LINE} style={{ width: WIDTH * 0.84 }} />
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, color: '#292929' }}>Subtotal</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH * 1.29 }}>
                                <Text style={{ fontSize: 20, color: '#38106A' }}>$6</Text>
                            </View>
                        </View>
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, color: '#292929' }}>Tax</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH * 1.45 }}>
                                <Text style={{ fontSize: 20, color: '#38106A' }}>$10</Text>
                            </View>
                        </View>
                        <Image source={LINE} style={{ width: WIDTH * 0.84 }} />
                        <View style={{ padding: 5, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, color: '#292929' }}>Total</Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: WIDTH * 1.3 }}>
                                <Text style={{ fontSize: 20, color: '#CE1567' }}>$230.23</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ ...styles.totalStyle }}>
                        <View style={{ flexDirection: 'row', padding: 3 }}>
                            <View style={{ justifyContent: 'flex-start', marginVertical: 8 }}><Image source={ORDER} style={{ height: 37, width: 30 }} /></View>
                            <View style={{ marginHorizontal: 10 }}>
                                <Text style={{ color: '#38106A', fontSize: 20 }}>Order Status</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={GREEN} style={{ height: 20, width: 20 }} />
                                    <Text style={{ color: '#38106A', marginHorizontal: 10 }}>Delivered</Text>
                                </View>
                                <Text style={{ color: '#82858A' }}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: 4, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Orderlist')
                        }} style={{ justifyContent: 'center', width: WIDTH * 0.9, height: 50, backgroundColor: 'white', borderRadius: 10, borderColor: '#CE1567', borderWidth: 1 }}>
                            <Text style={{ color: 'black', alignSelf: 'center', color: '#CE1567', fontSize: 18, fontWeight: '300' }}>Schedule a laundry</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    centeredContent: {
        justifyContent: 'center',
    },
    backgroundStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    headingTopView: {
        marginHorizontal: 140
    },
    topHeading: {
        color: 'black',
        fontSize: 15
    },
    backStyle: {
        height: 15.3,
        width: 20,
    },
    servicestxt: {
        color: 'black'
    },
    servicesFlatlist: {
        padding: 10,
        backgroundColor: '#F5F5F5',
        marginHorizontal: 14,
        borderRadius: 10,
        borderColor: '#38106A',
        borderWidth: 1,
    },
    itemListview: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#F9F9F9',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 7,
        borderRadius: 10,
    },
    totalStyle: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        width: WIDTH * 0.9,
        padding: 10,
        marginHorizontal: WIDTH * 0.05,
        borderRadius: 10,
        borderColor: '#E9EBF0',
        borderWidth: 1,
    },
});

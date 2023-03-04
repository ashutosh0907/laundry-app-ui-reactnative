import { View, Text, StatusBar, StyleSheet, Image, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native'
import { WIDTH } from '../constants/config'
import { BACK, CALENDER, PICKUP, PAYPAL, VISA, COD, PICK, LOCATION } from '../constants/imagepath'
import RoundCheckbox from 'rn-round-checkbox'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Paymentpage({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.backgroundStyle}>
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
                        <View style={{ ...styles.headingTopView }}>
                            <Text style={{ ...styles.topHeading }}>Schedule A Pickup</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, marginVertical: 10 }}>
                    <Text style={{ color: '#38106A', fontSize: 16 }}>Price Details</Text>
                </View>

                <View style={{ ...styles.totalStyle }}>
                    <View style={{ flexDirection: 'row', padding: 6 }}>
                        <View>
                            <Text style={{ color: '#38106A' }}>Subtotal</Text>
                        </View>
                        <View style={{ marginHorizontal: WIDTH * 0.56 }}>
                            <Text style={{ color: '#38106A', width: WIDTH, fontSize: 16 }}>$220.23</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 6 }}>
                        <View>
                            <Text style={{ color: '#38106A' }}>Tax</Text>
                        </View>
                        <View style={{ marginHorizontal: WIDTH * 0.697 }}>
                            <Text style={{ color: '#38106A', width: WIDTH, fontSize: 16 }}>$10</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 6 }}>
                        <View>
                            <Text style={{ color: '#38106A', fontSize: 16 }}>Total</Text>
                        </View>
                        <View style={{ marginHorizontal: WIDTH * 0.649, width: WIDTH }}>
                            <Text style={{ color: '#CE1567', fontSize: 17 }}>$230</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                    <Text style={{ color: '#38106A', fontSize: 16 }}>Schedule Date</Text>
                </View>
                <View style={{ ...styles.totalStyle }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                        <View><Text>Pickup Time</Text></View>
                        <View><Text>Delivery Time</Text></View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ flexDirection: 'row', padding: 15 }}>
                            <View><Image source={PICKUP} style={{ height: 40, width: 40 }} /></View>
                            <View>
                                <Text style={{ color: 'black' }}>Thu, 1 Apr</Text>
                                <Text style={{ color: '#38106A', fontSize: 20 }}>10:00 AM</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 15 }}>
                            <View><Image source={CALENDER} style={{ height: 40, width: 40 }} /></View>
                            <View>
                                <Text style={{ color: 'black' }}>Wed, 2 Apr</Text>
                                <Text style={{ color: '#38106A', fontSize: 20 }}>21:00 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                    <Text style={{ color: '#38106A', fontSize: 16 }}>Payment Method</Text>
                </View>
                <View style={{ ...styles.totalStyle }}>
                    <View style={{ flexDirection: 'row', padding: 4, justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <RoundCheckbox borderColor='red' onPress={(checked) => console.log("Checked: ", checked)} />
                        </View>
                        <View>
                            <Text style={{ color: '#38106A', fontSize: 20 }}>Pay Via Paypal</Text>
                            <Text style={{ color: '#CE1567' }}>+ Add Account</Text>
                        </View>
                        <View>
                            <Image source={PAYPAL} style={{ height: 40, width: 40 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 4, justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <RoundCheckbox borderColor='red' onPress={(checked) => console.log("Checked: ", checked)} />
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{ color: '#38106A', fontSize: 20 }}>Visa/Master Card</Text>
                            <Text style={{ color: '#82858A' }}>**** **** **** 1234</Text>
                        </View>
                        <View style={{ marginVertical: 4 }}>
                            <Image source={VISA} style={{ height: 20, width: 60 }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 4, justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <RoundCheckbox borderColor='red' onPress={(checked) => console.log("Checked: ", checked)} />
                        </View>
                        <View style={{ marginHorizontal: 15 }}>
                            <Text style={{ color: '#38106A', fontSize: 20 }}>Cash On Delivery</Text>
                        </View>
                        <View>
                            <Image source={COD} style={{ height: 40, width: 50 }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
                    <Text style={{ color: '#38106A', fontSize: 16 }}>Address</Text>
                </View>
                <View style={{ ...styles.totalStyle }}>
                    <View style={{ flexDirection: 'row', padding: 3 }}>
                        <View style={{ justifyContent: 'flex-start', marginVertical: 8 }}><Image source={PICK} style={{ height: 20, width: 20 }} /></View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: '#38106A', fontSize: 20 }}>Pickup Address</Text>
                            <Text style={{ color: '#82858A' }}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 3 }}>
                        <View style={{ justifyContent: 'flex-start', marginVertical: 8 }}><Image source={LOCATION} style={{ height: 20, width: 20 }} /></View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: '#38106A', fontSize: 20 }}>Delivery Address</Text>
                            <Text style={{ color: '#82858A' }}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong, Ha Noi</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginVertical: 4, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Orderdetails')
                    }} style={{ justifyContent: 'center', width: WIDTH * 0.9, height: 50, backgroundColor: '#CE1567', borderRadius: 10 }}>
                        <Text style={{ color: 'black', alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: '300' }}>Confirm Order</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
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
    centeredContent: {
        justifyContent: 'center',
    },
    backgroundStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    headingTopView: {
        marginHorizontal: 100
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
});

import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
    FlatList,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WIDTH } from '../constants/config';
import { TSHIRT, BACK, SHIRT, JEAN, SLEEVELESS, SUIT, SKIRT, POLO, DOWN, BOX, CIRCLE } from '../constants/imagepath';

function Orderlist({ navigation }) {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const [tshirt, setTshirt] = useState(0);
    const [shirt, setShirt] = useState(0);
    const [sleeveless, setSleeveless] = useState(0);
    const [skirt, setSkirt] = useState(0);
    const [polo, setPolo] = useState(0);
    const [suit, setSuit] = useState(0);
    const [jean, setJean] = useState(0);

    const servicesData = [{
        name: 'Wash',
    }, {
        name: 'Ironing',

    }, {
        name: 'Fold',
    }, {
        name: 'Dry',
    }, {
        name: 'Cleaning',
    }
    ]

    const itemsData = [
        {
            name: 'T-Shirt',
            price: '$2',
            img: TSHIRT,
            // increase: setTshirt(tshirt + 1),
            // decrease: setTshirt(tshirt - 1),
            // total: tshirt,
        }, {
            name: 'Shirt',
            price: '$5',
            img: SHIRT,
            // increase: setShirt(shirt + 1),
            // decrease: setShirt(shirt - 1),
            // total: shirt,
        }, {
            name: 'Sleeveless',
            price: '$6',
            img: SLEEVELESS,
            // increase: setSleeveless(sleeveless + 1),
            // decrease: setSleeveless(sleeveless - 1),
            // total: sleeveless,
        }, {
            name: 'Skirt',
            price: '$3',
            img: SKIRT,
            // increase: setSkirt(skirt + 1),
            // decrease: setSkirt(skirt - 1),
            // total: skirt,
        }, {
            name: 'Polo',
            price: '$4',
            img: POLO,
            // increase: setPolo(polo + 1),
            // decrease: setPolo(polo - 1),
            // total: polo,
        }, {
            name: 'Suit',
            price: '$8',
            img: SUIT,
            // increase: setSuit(suit + 1),
            // decrease: setSuit(suit - 1),
            // total: suit,
        }, {
            name: 'Jean',
            price: '$3',
            img: JEAN,
            // increase: setJean(jean + 1),
            // decrease: setJean(jean - 1),
            // total: jean,
        }
    ]


    const servicesView = ({ item }) => {
        return (
            <TouchableOpacity style={{ ...styles.servicesFlatlist }}>
                <Text style={{ ...styles.servicestxt }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const itemsView = ({ item }) => {
        return (
            <View style={{ ...styles.itemListview }}>
                <View style={{ padding: 4 }}>
                    <TouchableOpacity>
                        <Image source={item.img} style={{ height: 50, width: 50, }} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 25 }}>
                    <Text style={{ color: '#38106A', fontSize: 18 }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ color: '#CE1567' }}>{item.price}</Text>
                        <Text style={{ color: '#38106A', marginHorizontal: 10 }}>Men</Text>
                        <TouchableOpacity style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                            <Image source={DOWN} style={{ height: 11, width: 20 }} />
                        </TouchableOpacity>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', marginHorizontal: 100 }}>
                            <TouchableOpacity onPress={() => {
                                item.decrease;
                            }}>
                                <Image source={CIRCLE} style={{ height: 25, width: 25 }} />
                                <View style={{ position: 'absolute', marginHorizontal: 5 }}>
                                    <Text style={{ color: 'black', fontSize: 15 }}> - </Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: 'black', marginHorizontal: 8 }}> 9 </Text>
                            <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => {
                                item.increase;
                            }}>
                                <Image source={CIRCLE} style={{ height: 25, width: 25 }} />
                                <View style={{ position: 'absolute', marginHorizontal: 3 }}>
                                    <Text style={{ color: 'black', fontSize: 15 }}> + </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                </View>
            </View>
        )
    }

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
                    <View style={{ backgroundColor: 'white' }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("StartScreen")
                        }}>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.backgroundStyle}>


                        {/* Order List */}
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
                                <Text style={{ ...styles.topHeading }}>Orders List</Text>
                            </View>
                        </View>
                        {/* Order List Closed */}

                        <View style={{ marginVertical: 4 }}>

                            <FlatList
                                horizontal
                                data={servicesData}
                                renderItem={servicesView}
                            />
                        </View>
                        <View>
                            <FlatList
                                data={itemsData}
                                renderItem={itemsView}
                            />
                        </View>
                        <View style={{ backgroundColor: '#F9F9F9', borderRadius: 20, marginVertical: 5 }}>
                            <View style={{ flex: 1, width: WIDTH, flexDirection: 'row' }}>
                                <View style={{ justifyContent: 'center', marginHorizontal: 20, }}>
                                    <Image source={BOX} style={{ height: 50, width: 50, marginVertical: 10 }} />
                                </View>
                                <View style={{ marginHorizontal: 10, justifyContent: 'center', flexDirection: 'row', marginVertical: 10, }}>
                                    <View>
                                        <Text style={{ color: '#595757' }}>Total</Text>
                                        <Text style={{ color: 'black', fontSize: 20 }}>16 Items</Text>
                                    </View>
                                    <View style={{ marginHorizontal: 180 }}>
                                        <Text style={{ color: '#595757' }}>Cost</Text>
                                        <Text style={{ color: '#CE1567', fontSize: 20 }}>18$</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginVertical: 4, alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Paymentpage')
                                }} style={{ justifyContent: 'center', width: WIDTH * 0.9, height: 50, backgroundColor: '#CE1567', borderRadius: 10 }}>
                                    <Text style={{ color: 'black', alignSelf: 'center', color: 'white', fontSize: 18, fontWeight: '300' }}>Confirm Order</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
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
});

export default Orderlist;

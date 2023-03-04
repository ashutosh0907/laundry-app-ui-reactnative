import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Orderlist from './screens/Orderlist';
import Homescreen from './screens/Homescreen';
import Paymentpage from './screens/Paymentpage';
import Orderdetails from './screens/Orderdetails';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homescreen'>
        <Stack.Screen options={{ headerShown: false }} name='Homescreen' component={Homescreen} />
        <Stack.Screen options={{ headerShown: false }} name='Orderlist' component={Orderlist} />
        <Stack.Screen options={{ headerShown: false }} name='Paymentpage' component={Paymentpage} />
        <Stack.Screen options={{ headerShown: false }} name='Orderdetails' component={Orderdetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


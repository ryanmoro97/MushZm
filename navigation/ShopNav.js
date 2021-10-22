import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import ShopScreen from "../screens/ShopScreen";
import { NavigationContainer } from "@react-navigation/native";
import { View, Image } from 'react-native';
import styles from "../styles";
const ShopStack = createStackNavigator();
const ShopStackScreen = () => {
    return(
        <ShopStack.Navigator screenOptions ={({ route }) => ({
                headerTintColor: '#5961a6',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    fontFamily: 'Georgia'
                },
                headerLeftLabelVisible: false,
                headerBackground: () => (
                    <Image
                    style = {styles.headerBackground}
                    source = {require('../assets/header/header.png')}
                    />
                )
            })}>
            <ShopStack.Screen name="Shop" component={ShopScreen}/>             
        </ShopStack.Navigator>
    )
}
export default ShopStackScreen;
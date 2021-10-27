import React, { useEffect } from "react";
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import ShopScreen from "../screens/ShopScreen";
import DetailsScreen from "../screens/DetailsScreen"
import CartScreen from  "../screens/CartScreen"
import { NavigationContainer } from "@react-navigation/native";
import MongoContext from "../context/MongoContext";
import ConfirmationScreen from "../screens/ConfirmationScreen";

import { View, Image, Button, Text, TouchableOpacity } from 'react-native';
import styles from "../styles";

const ShopStack = createStackNavigator();
const DrawerNav = createDrawerNavigator();

const ShopStackScreen = ({navigation,client,user}) => {
    // console.log("eheh"+client);

    return(
        <MongoContext.Consumer>{(MongoContext) => {
            return(
                <ShopStack.Navigator screenOptions ={({ route }) => ({
                    headerTintColor: '#5961a6',
                    headerTitleStyle: {
                        fontWeight: 'normal',
                        fontFamily: 'Georgia',
                    },
                    headerLeftLabelVisible: false,
                    headerBackground: () => (
                        <Image
                        style = {styles.headerBackground}
                        source = {require('../assets/header/header.png')}
                        />
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={styles.shopIconContainer} onPress={() => navigation.navigate('Cart')}>
                            <Image source={require('../assets/icons/cart.png')} style={styles.cartIcon}/>
                        </TouchableOpacity>
                    ),
                })}>
                <ShopStack.Screen name="Shop" component={ShopScreen}/>  
                <ShopStack.Screen name="Details" component={DetailsScreen}/>  
                <ShopStack.Screen name="Cart" component={CartScreen} options={{headerRight: null}}/>
                <ShopStack.Screen name="Confirmation" component={ConfirmationScreen} options={{headerLeft: false, headerRight:false}} />                          
            </ShopStack.Navigator>
            )
            
        }}</MongoContext.Consumer>
    )
}
export default ShopStackScreen;
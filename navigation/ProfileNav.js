import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from "../screens/ProfileScreen"
import { NavigationContainer } from "@react-navigation/native";
import { View, Image } from 'react-native';
import styles from "../styles";
const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator screenOptions ={({ route }) => ({
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
            <ProfileStack.Screen name="Profile" component={ProfileScreen}/> 
            <ProfileStack.Screen name="Orders" component={ProfileScreen}/> 
        </ProfileStack.Navigator>
    )
}
export default ProfileStackScreen;
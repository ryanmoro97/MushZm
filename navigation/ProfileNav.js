import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from "../screens/ProfileScreen"
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import AccountScreen from "../screens/AccountScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ReportsScreen from "../screens/ReportsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { View, Image } from 'react-native';
import styles from "../styles";
const ProfileStack = createStackNavigator();
import MongoContext from "../MongoContext";

const ProfileStackScreen = ({navigation, client, user}) => {
    return(
        <MongoContext.Consumer>{(MongoContext) => {
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
                })}
                >
                    <ProfileStack.Screen name="Profile" component={ProfileScreen}/> 
                    <ProfileStack.Screen name="Sign in" component={SignInScreen}/> 
                    <ProfileStack.Screen name="Sign up" component={SignUpScreen}/> 
                    <ProfileStack.Screen name="Account" component={AccountScreen} options={{headerLeft: null}}/> 
                    {/* <ProfileStack.Screen name="Orders" component={OrdersScreen}/> 
                    <ProfileStack.Screen name="Reports" component={ReportsScreen}/>  */}
                </ProfileStack.Navigator>
            )
        }}</MongoContext.Consumer>
            
    )
}
export default ProfileStackScreen;
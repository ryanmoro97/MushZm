import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import { useState, useEffect, useContext } from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../styles";
import SignInScreen from "./SignInScreen";
import MongoContext from "../MongoContext";

const AccountScreen = ({navigation}) => {
    const mongo = useContext(MongoContext)

    async function logout () {
        try{
            await mongo.app.currentUser.logOut()
            //login anon user
            mongo.setUser(await mongo.app.logIn(Realm.Credentials.anonymous()))
            //set new client
            mongo.setClient(mongo.app.currentUser.mongoClient('mongodb-atlas'))
            navigation.navigate('Profile')
        }catch (err){
            // console.log("error: ", err.message)
        }
    }

    return (
        <View style={styles.ProfileContainer}>
            <Text style={styles.loginBtnText}>sfsdfsfsdfsd {mongo.user.id}</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={() => logout()}>
                <Text style={styles.loginBtnText}>Sign out</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default AccountScreen;

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
import MongoContext from "../context/MongoContext";
import UserContext from "../context/UserContext";

const AccountScreen = ({navigation}) => {
    const mongo = useContext(MongoContext)
    const user = useContext(UserContext)

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

    

    useEffect(() => {
        console.log("user: " + user.email)
        async function getData () {
            const userInfo = mongo.client.db('MushZmStore').collection('Profile').findOne({email: user.email});
            console.log("")
        
        }
        getData();
        
    },)

    return (
        <View style={styles.ProfileContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Orders')}>
                <Text style={styles.loginBtnText}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Reports')}>
                <Text style={styles.loginBtnText}>Reports</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutBtn} onPress={() => logout()}>
                <Text style={styles.loginBtnText}>Sign out</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default AccountScreen;

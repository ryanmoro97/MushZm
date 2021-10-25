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

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.ProfileContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Sign in')}>
            <Text style={styles.loginBtnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Sign up')}>
            <Text style={styles.loginBtnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;

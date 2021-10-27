import { Formik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import * as yup from 'yup'
import { useState, useEffect, useContext } from 'react'
import Loading from '../components/Loading'
import { useHistory } from 'react-router'
import MongoContext from '../context/MongoContext'
import UserContext from '../context/UserContext'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from "../styles";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  
  const ConfirmationScreen = ({navigation}) => {
    return (
        <View style={styles.ProfileContainer}>
            <Text style={styles.stackText}>Your order has been processed. You can view orders on your profile</Text>
            <TouchableOpacity style={styles.loginBtn} onPress={() => {navigation.navigate('Shop')}}>
                <Text style={styles.loginBtnText}>Return Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ConfirmationScreen
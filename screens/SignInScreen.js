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

  
  const SignInScreen = ({navigation}) => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [pw, setpw] = useState('')
    const mongo = useContext(MongoContext)
    const user = useContext(UserContext)

    function isAnon (user) {
        return !user || user.identities[0].providerType === 'anon-user'
    }
    
    async function submitLogin (val) {
        if(!email || !pw){
            alert('Fields cannot be empty')
            return
        }
        if(pw.length < 6){
            alert('Password must be more than 6 characters')
            return
        }
        const credentials = Realm.Credentials.emailPassword(email, pw);
        try {
            user.setEmail(email);
            mongo.setUser(await mongo.app.logIn(credentials));
            navigation.navigate('Account')
        } catch (err) {
            alert('Invalid Credentials')
        }
    }

    return (
        <View style={styles.ProfileContainer}>
            <TextInput
                type = 'number'
                style={styles.loginBtn}
                keyboardType = 'email-address'
                autoCompleteType = 'email'
                placeholder = 'email'
                onChangeText={(val) => setEmail(val)}
            />
            <TextInput
                type = 'number'
                style={styles.loginBtn}
                placeholder = 'password'
                secureTextEntry={true}
                onChangeText={(val) => setpw(val) }
            />
            <TouchableOpacity style={styles.loginBtn} onPress={() => submitLogin()}>
                <Text style={styles.loginBtnText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignInScreen
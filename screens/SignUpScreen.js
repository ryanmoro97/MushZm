import { Formik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import * as yup from 'yup'
import { useState, useEffect, useContext } from 'react'
import Loading from '../components/Loading'
import { useHistory } from 'react-router'
import MongoContext from '../MongoContext'
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


const SignUpScreen = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const mongo = useContext(MongoContext)
    const [email, setEmail] = useState('')
    const [pw, setpw] = useState('')

    function isAnon (user) {
        return !user || user.identities[0].providerType === 'anon-user'
    }

    async function submitLogin () {
        if(!email || !pw){
            alert('Fields cannot be empty')
            return
        }
        setLoading(true)
        await app.emailPasswordAuth.registerUser(email, pw);
        //login user and redirect to home
        const credentials = Realm.Credentials.emailPassword(email, pw);
        setUser(await app.logIn(credentials))
        console.log("sdfs")
        setLoading(false)
    }

    useEffect(() => {
        // console.log("username")
        },
    )

    return (
        
        <View style={styles.ProfileContainer}>
            <TextInput
                style={styles.loginBtn}
                keyboardType = 'email-address'
                autoCompleteType = 'email'
                placeholder = 'email'
                onChangeText={(val) => setEmail(val)}

            />
            <TextInput
                style={styles.loginBtn}
                placeholder = 'password'
                secureTextEntry={true}
                onChangeText={(val) => setpw(val)}
            />
            <TouchableOpacity style={styles.loginBtn} onPress={() => submitLogin()}>
                <Text style={styles.loginBtnText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUpScreen
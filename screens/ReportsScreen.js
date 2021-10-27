import React from "react";
import { useState, useEffect, useContext } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import styles from "../styles";
import {ListItem} from 'react-native-elements'
import Realm from 'realm';
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import Images from "../assets/images.js";
import MongoContext from "../context/MongoContext";
import UserContext from "../context/UserContext";


const ReportsScreen = ({navigation}) => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const mongo = useContext(MongoContext)
  const user = useContext(UserContext)

  useEffect(() => {
    async function getData () {
      try{
        const userInfo = mongo.client.db('MushZmStore').collection('Profile').find({email: user.email})
        setReports(Object.values((await userInfo).slice(0, 2)[0].reports))
      }catch(err){
        console.log(err.message)
      }
    }
    getData();
  },[mongo])


  return (
    <View style={styles.ShopContainer}>
        <FlatList
          containerStyle={styles.reportListItems}
          data={reports}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ListItem containerStyle={styles.reportListItem}> 
              <Text style={styles.strainText}>
                Strain: {item.strain} | 
                Dose: {item.dosage}g | 
                Intensity: {item.dosage}
                </Text>
              <Text> {item.text}</Text>
            </ListItem>
          )}
        /> 
        <TouchableOpacity style={styles.loginBtn} onPress={() => submitLogin()}>
          <Text style={styles.loginBtnText}>Add report</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ReportsScreen;
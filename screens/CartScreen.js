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
import ConfirmationScreen from "./ConfirmationScreen";
import { Alert } from "react-bootstrap";


const ReportsScreen = ({navigation}) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState('0')
  const [orders, setOrders] = useState([])
  const [weight, setWeight] = useState('')
  const mongo = useContext(MongoContext)
  const user = useContext(UserContext)

  async function checkout() {
      console.log("checkin out")
      try{
        if(total != 0){
          await mongo.client.db('MushZmStore').collection('Orders').insertOne({
              email: user.email,
              total: total,
              cart: cart,
          })
          user.cart = null
          mongo.client.db('MushZmStore').collection('Profile').updateOne(
            {email: user.email},
            {$set: {cart: null}}
        )
          navigation.navigate('Confirmation')
        }
        else{
          alert('Cart is empty')
        }
        
      }catch(err){
        console.log(err.message)
      }
  }

  useEffect(() => {
    async function getData () {
      try{
        const userInfo = mongo.client.db('MushZmStore').collection('Profile').find({email: user.email})
        const data = Object.values((await userInfo).slice(0, 10)[0].cart)
        console.log("data: " + data)
        console.log("data: " + JSON.stringify(data))
        
        setTotal(data.pop())
        setCart(data)
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
          data={cart}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View>
                <ListItem containerStyle={styles.cartListItem}> 
                    <Text style={styles.strainText}>{item.strain}</Text>
                    <Text>{item.weight} | ${item.cost}</Text>
                </ListItem>
            </View>
          )}
        /> 
        <Text style={styles.totalText}>Total: ${total}</Text>
        <TouchableOpacity style={styles.loginBtn} onPress={() => checkout()}>
          <Text style={styles.loginBtnText}>Checkout</Text>
        </TouchableOpacity>
    </View>
  );
};

export default ReportsScreen;
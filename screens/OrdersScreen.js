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
import { User } from "realm-web";


const OrdersScreen = ({navigation}) => {
  const [mushrooms, setMushrooms] = useState([])
  const [orders, setOrders] = useState([])
  const mongo = useContext(MongoContext)
  const user = useContext(UserContext)

  useEffect(() => {
    // retrieve and display orders 
    async function getData () {
        try{
          const userInfo = mongo.client.db('MushZmStore').collection('Orders').find({email: user.email})
          setOrders(Object.values((await userInfo).slice(0, 14)))
          console.log("cart:" + orders[0].cart)
          console.log("user:" + JSON.stringify(orders[0].cart))
        }catch(err){
            console.log("couldnt find any" + err.message)
        }
    }
    getData();
  },[orders.length])


  return (
    <View style={styles.ShopContainer}>
        <FlatList
          containerStyle={styles.mushroomListItems}
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ListItem containerStyle={styles.reportListItem}>
              <FlatList
                containerStyle={styles.mushroomListItems}
                data={item.cart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <ListItem containerStyle={styles.ordersListItem}>
                      <Text style={styles.strainText}>{item.strain}</Text>
                      <Text>{item.weight}oz | ${item.cost}</Text>
                  </ListItem>
                )}
              />
              <Text></Text>
              <Text style={styles.totalText}>Total: ${item.total}/oz</Text>
            </ListItem>
          )}
        />
    </View>
  );
};

export default OrdersScreen;
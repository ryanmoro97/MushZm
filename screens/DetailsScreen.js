import React, { useEffect } from "react";
import { useState, useContext } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    Image,
    View,
  } from 'react-native';
import { Value } from "react-native-reanimated";
import { Picker } from "@react-native-picker/picker";
import SelectDropdown from 'react-native-select-dropdown'
import styles from "../styles";
import "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-gesture-handler";
import MongoContext from "../context/MongoContext";
import UserContext from "../context/UserContext";


const DetailsScreen = ({route, navigation}) => {
    const [weight, setWeight] = useState(3);
    const [total, setTotal] = useState(route.params.item.price);
    const ozPrice = route.params.item.price
    var tripFactor = 0.03;
    const weightOptions = ["1/8 oz", "1/4 oz", "1/2 oz", "1 oz", "4 oz"]
    const unitOptions = ["lbs", "kg"]
    const mongo = useContext(MongoContext)
    const user = useContext(UserContext)


    async function addToCart () {
        try{
            const userInfo = mongo.client.db('MushZmStore').collection('Profile').find({email: user.email})
            userInfoSliced = (await userInfo).slice(0, 2)[0]
            console.log("cc: " + JSON.stringify(userInfoSliced))
            console.log("reee: " + JSON.stringify(userInfoSliced.cart))
            // const dbCart = Object.values()
            if(!userInfoSliced.cart){
                //create and insert new cart for user
                cartItem = {"0":{
                    strain: route.params.item.strain,
                    cost: total,
                    weight: weightOptions[weight]
                }, total}
                user.cart = cartItem
                mongo.client.db('MushZmStore').collection('Profile').updateOne(
                    {email: user.email},
                    {$set: {cart: cartItem}}
                )
            }
            else{
                //append to current cart
                const currentCart = Object.values(user.cart)
                const currentTotal = currentCart.pop()
                const Total = (parseFloat(total)+parseFloat(currentTotal))
                const cartSize = currentCart.length 
                //add currentCart to databaseCart
                currentCart.push({
                    strain: route.params.item.strain,
                    cost: total,
                    weight: weightOptions[weight]
                }, Total)
                // update user.cart & database cart
                user.cart = currentCart
                mongo.client.db('MushZmStore').collection('Profile').updateOne(
                    {email: user.email},
                    {$set: {cart: currentCart}}
                )
            }
          }catch(err){
            console.log(err.message)
          }
    }

    // determine cost based on weight selected
    useEffect(() => {
        switch(+weight) {
            case 0: //micro
              costFactor = (1/8);
              break;
            case 1: //low
              costFactor = (1/4);
              break;
            case 2: //normal
              costFactor = (1/2);
              break;
            case 3: //high
              costFactor = (1);
              break;
            case 4: //heroic
              costFactor = (4);
              break;
          }
          setTotal((costFactor*ozPrice).toFixed(2));
          
    });

    return (
      
      <View style={styles.StackContainer}>
        <ScrollView>
            <Text style={styles.detailsTitle}>{route.params.item.strain}</Text>
            <Image style = {styles.mushImgDetails} source={route.params.imgsrc} />
            <View style = {styles.fullLabelInputContainer}>
                <View style = {styles.labelInputContainer}>
                    <Text>Weight: </Text>
                </View>
                <View style={styles.unitCombo}>
                    <View style ={styles.displayOptions}>
                        <SelectDropdown
                        data={weightOptions}
                        defaultButtonText = "1 oz"
                        dropdownStyle = {styles.dropDownUnits}
                        buttonStyle = {styles.DropDownWeightBtn}
                        rowTextStyle = {styles.displayOptionsText}
                        buttonTextStyle = {styles.displayOptionsText}
                        rowStyle = {styles.dropDownWeightRow}
                        onSelect={(selectedItem, index) => {
                            setWeight(index);
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        />
                    </View>
                </View>
            </View>
            <View style = {styles.fullLabelInputContainer}>
                <View style = {styles.labelInputContainer}>
                    <Text>Total: </Text>
                </View>
                <Text style={styles.totalText}>${total}</Text>
            </View>
            <TouchableOpacity style={styles.addToCart} onPress={()=>addToCart()}>
                <Text style={styles.displayOptionsText}>Add to cart</Text>
            </TouchableOpacity>

            <Text style = {styles.infoSectionHeader}>Info</Text>
            <Text style = {styles.mushInfo}>{route.params.item.descr}</Text>

        </ScrollView>
    </View>
    );
};

export default DetailsScreen;
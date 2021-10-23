import React, { useEffect } from "react";
import { useState } from "react";
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



const DetailsScreen = ({route, navigation}) => {
    const [weight, setWeight] = useState(3);
    const [total, setTotal] = useState(route.params.item.price);
    const ozPrice = route.params.item.price
    var tripFactor = 0.03;
    const weightOptions = ["1/8 oz", "1/4 oz", "1/2 oz", "1 oz", "4 oz"]
    const unitOptions = ["lbs", "kg"]
    // const { _id, strain, price, descr, img } = route.params;

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
                    <View style ={styles.inputContainer}>
                        <SelectDropdown
                        data={weightOptions}
                        defaultButtonText = "1 oz"
                        dropdownStyle = {styles.dropDownUnits}
                        buttonStyle = {styles.DropDownWeightBtn}
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
            <View style={styles.addToCart}>
                <Text style={styles.stackText}>Add to cart</Text>
            </View>

            <Text style = {styles.infoSectionHeader}>Info</Text>
            <Text style = {styles.mushInfo}>{route.params.item.descr}</Text>

        </ScrollView>
    </View>
    );
};

export default DetailsScreen;
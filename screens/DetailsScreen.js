import React, { useEffect } from "react";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
  } from 'react-native';
import { Value } from "react-native-reanimated";
import { Picker } from "@react-native-picker/picker";
import SelectDropdown from 'react-native-select-dropdown'
import styles from "../styles";
import "react-native-gesture-handler";



const DosageScreen = ({navigation}) => {
    const [dosage, setDosage] = useState('2.0');
    var tripFactor = 0.03;
    const doseOptions = ["Micro", "Low", "Normal", "High", "Heroic"]
    const unitOptions = ["lbs", "kg"]
    
    useEffect(() => {

    });

    return (
      
      <View style={styles.StackContainer}>
          <Text>HEhheheh</Text>
          <Text>HEhheheh</Text>
        {/* <Text style={styles.stackText}>Each 
        </Text>
        <View style = {styles.fullLabelInputContainer}>
          <View style = {styles.labelInputContainer}>
            <Text>Weight: </Text>
          </View>
          <View style={styles.unitCombo}>
            <View style ={styles.inputContainer}>
              <TextInput
                type = 'number'
                style={styles.input}
                keyboardType={'numeric'}
                defaultValue='150'
                onChangeText={(val) => setWeight(val) }
                maxLength={4}
              />
            </View>
            <SelectDropdown
              data={unitOptions}
              defaultButtonText = "lbs"
              dropdownStyle = {styles.dropDownUnits}
              buttonStyle = {styles.dropDownUnitsBtn}
              rowStyle = {styles.dropDownUnitsRow}
              onSelect={(selectedItem, index) => {
                setUnits(index);
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

        <View style = {styles.fullLabelInputContainer}>
          <View style = {styles.labelInputContainer}>
            <Text>Dose:     </Text>
          </View>
          <SelectDropdown
            data={doseOptions}
            defaultButtonText = "Normal"
            buttonStyle = {styles.dropDownDoseBtn}
            dropdownStyle = {styles.dropDownDose}
            rowStyle = {styles.dropDownDoseRow}
            onSelect={(selectedItem, index) => {
              setDose(index);
              
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              return item
            }}
          />
        </View>
        <View style={styles.boxArea}>
          <Text style={styles.stackText}>Recommended dose</Text>
          <Text style={styles.displayValueText}>{dosage} g</Text> 
        </View>

        <Text style={styles.stackText}>These calculators can only provide an estimate based 
          on average dry potency. Adjust accordingly. {"\n"} For a full tolerance reset 2 weeks 
          is standard.
        </Text> */}
      </View>
    );
};

export default DosageScreen;
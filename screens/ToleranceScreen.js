import React, { useEffect } from "react";
import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
  } from 'react-native';
import { Value } from "react-native-reanimated";
import styles from "../styles";



const DosageScreen = ({navigation}) => {
    const [firstDose, setFirstDose] = useState(3.5);
    const [desiredDose, setDesiredDose] = useState(3.5);
    const [secondDose, setSecondDose] = useState(6.2); 
    const [days, setDays] = useState(3);
    
    useEffect(() => {
      // // https://psychedeliccalc.herokuapp.com
      var estimatedDosage = firstDose / 100 * 280.059565 * Math.pow(days, -0.412565956) + (desiredDose - firstDose);
      var newAmount = estimatedDosage < desiredDose ? desiredDose : estimatedDosage;
      setSecondDose(newAmount.toFixed(1));
    });

    return (
      
      <View style={styles.StackContainer}>
        <Text style={styles.stackText}>Tolerance to psilocybin builds and dissipates 
        quickly; ingesting psilocybin more than about once a week can lead to 
        diminished effects.
        </Text>
        <View style = {styles.fullLabelInputContainer}>
          <View style = {styles.labelInputContainer}>
            <Text>Last dose (g): </Text>
            <Text>Desired dose (g): </Text>
            <Text>Days since consumption: </Text>
          </View>
          
          <View style ={styles.inputContainer}>
            
            <TextInput
              type = 'number'
              style={styles.input}
              keyboardType={'numeric'}
              defaultValue='3.5'
              onChangeText={(val) => setFirstDose(val) }
              maxLength={4}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              defaultValue='3.5'
              maxLength={4}
              onChangeText={(val) => setDesiredDose(val)}
            />
            <TextInput
              style={styles.input}
              keyboardType={'numeric'}
              defaultValue='3'
              maxLength={2}
              onChangeText={(val) => setDays(val)}
            />
          </View>
        </View>

        <View style={styles.boxArea}>
          <Text style={styles.stackText}>You will need a dose of</Text>
          <Text style={styles.displayValueText}>{secondDose} g</Text> 
          <Text style={styles.stackText}>to feel the same effects as your last dose</Text>
        </View>

        <Text style={styles.stackText}>These calculators can only provide an estimate based 
          on average dry potency. Adjust accordingly. {"\n"} For a full tolerance reset 2 weeks 
          is standard.
        </Text>
      </View>
    );
};

export default DosageScreen;
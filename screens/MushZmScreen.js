import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    TouchableOpacity,
    View,
  } from 'react-native';
import styles from "../styles";

const MushZmScreen = ({navigation}) => {
    return (
        <View style={styles.Mushzmcontainer}>
            <View style={styles.buttonRows}>
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('Brain')}>
                    <Image
                        source = {require('../assets/mushZmButtons/brain.png')}
                        style = {styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Brain</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Uses")}>
                    <Image
                        source = {require('../assets/mushZmButtons/cross.png')}
                        style = {styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Uses</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.buttonRows}>
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Companies")}>
                    <Image
                        source = {require('../assets/mushZmButtons/company.png')}
                        style = {styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Companies</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Papers")}>
                    <Image
                        source = {require('../assets/mushZmButtons/papers.png')}
                        style = {styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Papers</Text>
                </TouchableOpacity> 
            </View>
            <View style={styles.buttonRows}>
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Dosage")}>
                    <Image
                        source = {require('../assets/mushZmButtons/dosage.png')}
                        style = {styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Dosage</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate("Tolerance")}>
                    <Image
                        source = {require('../assets/mushZmButtons/tolerance.png')}
                        style = {styles.buttonImage}
                    />
                    <Text style={styles.buttonText}>Tolerance</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
};

export default MushZmScreen;



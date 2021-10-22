import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import MushZmScreen from "../screens/MushZmScreen";
import BrainScreen from "../screens/BrainScreen";
import UsesScreen from "../screens/UsesScreen";
import CompaniesScreen from "../screens/CompaniesScreen";
import PapersScreen from "../screens/PapersScreen";
import DosageScreen from "../screens/DosageScreen";
import ToleranceScreen from "../screens/ToleranceScreen";
import { View, Image } from 'react-native';
import styles from "../styles";

const MushZmStack = createStackNavigator();
const MushZmStackScreen = () => {
    return(
        <MushZmStack.Navigator screenOptions ={({ route }) => ({
                headerTintColor: '#5961a6',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    fontFamily: 'Georgia'
                },
                headerLeftLabelVisible: false,
                headerBackground: () => (
                    <Image
                    style = {styles.headerBackground}
                    source = {require('../assets/header/header.png')}
                    />
                )
            })}>
            <MushZmStack.Screen name="MushZm" component={MushZmScreen}/>             
            <MushZmStack.Screen name="Brain" component={BrainScreen}/>
            <MushZmStack.Screen name="Uses" component={UsesScreen}/>
            <MushZmStack.Screen name="Companies" component={CompaniesScreen}/>
            <MushZmStack.Screen name="Papers" component={PapersScreen}/>
            <MushZmStack.Screen name="Dosage" component={DosageScreen}/>
            <MushZmStack.Screen name="Tolerance" component={ToleranceScreen}/>
        </MushZmStack.Navigator>
    )
}
export default MushZmStackScreen;





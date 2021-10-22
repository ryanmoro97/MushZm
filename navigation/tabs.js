import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles';
import MushZmStackScreen  from './MushZmNav';
import ShopStackScreen from './ShopNav';
import ProfileStackScreen from './ProfileNav';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return(
        <Tab.Navigator screenOptions = {styles.screenOptions} initialRouteName="Shop1"
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: '#fda761', // '#fda141',
                tabBarInactiveBackgroundColor: '#fda761',
                headerShown: false,
                
            })}
            options
        >
            <Tab.Screen
                name="MushZm1" component={MushZmStackScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image 
                                source = {require('../assets/icons/mushHome.png')}
                                resizeMode = 'contain'
                                style = {{
                                    width: 25, height: 25,
                                    borderBottomWidth: 1,
                                    borderRadius: 5,
                                    tintColor: focused ? '#5b0e2d' : '#F9EA9D',
                                    borderColor: focused ? '#5b0e2d' : '#fda761',
                                }}
                            />
                        </View>
                    ),
            }}/>
            <Tab.Screen name="Shop1" component={ShopStackScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                        <Image 
                            source = {require('../assets/icons/shop.png')}
                            resizeMode = 'contain'
                            style = {{
                                width: 25, height: 25,
                                borderBottomWidth: 1,
                                borderRadius: 5,
                                tintColor: focused ? '#5b0e2d' : '#F9EA9D',
                                borderColor: focused ? '#5b0e2d' : '#fda761',
                            }}
                        />
                        </View>
                    ),
                }}/>
            <Tab.Screen name="Profile1" component={ProfileStackScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <View>
                    <Image 
                        source = {require('../assets/icons/profile.png')}
                        resizeMode = 'contain'
                        style = {{
                            width: 25, height: 25,
                            borderBottomWidth: 1,
                            borderRadius: 5,
                            tintColor: focused ? '#5b0e2d' : '#F9EA9D',
                            borderColor: focused ? '#5b0e2d' : '#fda761',
                        }}
                    />
                    </View>
                ),
            }}/>
      </Tab.Navigator>
    )
}

export default Tabs;
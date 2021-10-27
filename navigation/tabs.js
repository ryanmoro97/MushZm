import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { createContext } from 'react';
import { View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import styles from '../styles';
import MushZmStackScreen  from './MushZmNav';
import ShopStackScreen from './ShopNav';
import ProfileStackScreen from './ProfileNav';
import MongoContext from '../context/MongoContext.js';
import UserContext from '../context/UserContext';



const Tab = createBottomTabNavigator();
const Tabs = () => {
    const [client, setClient] = useState(null)
    const [user, setUser] = useState(null)
    const [app, setApp] = useState(new Realm.App({id: "mushzm-ctshl"}))
    const [email, setEmail] = useState(null)
    const [orders, setOrders] = useState(null)
    const [reports, setReports] = useState(null)
    const [cart, setCart] = useState(null)
    
      
    useEffect(() => {
    async function init () {
        if (!user) {
        setUser(app.currentUser ? app.currentUser : await app.logIn(Realm.Credentials.anonymous()))
        }

        if (!client) {
        setClient(app.currentUser.mongoClient('mongodb-atlas'))
        }
    }

    init();
    }, [app, client, user])
   
    return(
        <MongoContext.Provider value={{app, client, user, setClient, setUser, setApp}}>
            <UserContext.Provider value={{email, orders, reports, cart, setOrders, setReports, setEmail, setCart}}>
                <Tab.Navigator screenOptions = {styles.screenOptions} initialRouteName="Shop1"
                    screenOptions={({ route }) => ({
                        tabBarShowLabel: false,
                        tabBarActiveBackgroundColor: '#fda761', 
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
            </UserContext.Provider>
        </MongoContext.Provider>
    )
}

export default Tabs;
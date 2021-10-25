/**
 * @format
 * @flow strict-local
 */
import styles from './styles.js';
import * as React from 'react';
import { SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Fragment } from 'react/cjs/react.production.min';
import { useState, useEffect } from 'react';
import Tabs from './navigation/tabs'
import MongoContext from './MongoContext.js';

export default function App() {

  return (
    <Fragment>
        <SafeAreaView style={styles.safeAreaTop}></SafeAreaView>
        <SafeAreaView style={styles.safeAreaBottom}>
          <NavigationContainer>
            <Tabs/>
          </NavigationContainer>
        </SafeAreaView>
    </Fragment>
    
  );
}


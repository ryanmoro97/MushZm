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


const ShopScreen = ({navigation}) => {
  const [mushrooms, setMushrooms] = useState([])
  const [loading, setLoading] = useState(true)
  const mongo = useContext(MongoContext)

  // find stored image based on database reference
  imageSelect = img => {
    if (img === null) {
      return Images.mushIcons.penisEnvy;
    }
    const mushroomIcons = {
      'PE': Images.mushIcons.penisEnvy,
      'APE': Images.mushIcons.albinoPenisEnvy,
      'MAZ': Images.mushIcons.mazatapec,
      'GM': Images.mushIcons.goldenMammoth,
      'GT': Images.mushIcons.goldenTeacher,
      'B': Images.mushIcons.b,
      'AL': Images.mushIcons.alacabenzi,
      'F': Images.mushIcons.f,
      'KS': Images.mushIcons.kohSamai,
      'FW': Images.mushIcons.floridaWhite,
      'JMF': Images.mushIcons.jediMindFuck,
      'A': Images.mushIcons.a,
      'MAR': Images.mushIcons.martinique,
      'AM': Images.mushIcons.amazonian,
    };
    return mushroomIcons[img];
  };

  useEffect(() => {
    // retrieve available shop selection from database
    async function getData () {
      try{
        const mushies = mongo.client.db('MushZmStore').collection('Mushroom')
        setMushrooms((await mushies.find()).slice(0, 14))
        console.log("msh: " + mushrooms)
        console.log("msh: " + JSON.stringify(mushrooms))
        
      }catch(err){

      }
    }
    getData();
  },[mongo])


  return (
    <View style={styles.ShopContainer}>
        <FlatList
          containerStyle={styles.mushroomListItems}
          data={mushrooms}
          numColumns={2}
          columnWrapperStyle={styles.mushroomListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {item:item, imgsrc:imageSelect(item.img)})}>  
              <ListItem containerStyle={styles.mushroomListItem} image ={item.img}>
                <Image style = {styles.mushImg} source={imageSelect(item.img)} />
                <Text style={styles.strainText}> {item.strain}</Text>
                <Text> ${item.price}/oz</Text>
              </ListItem>
            </TouchableOpacity>
          )}
        />
    </View>
  );
};

export default ShopScreen;
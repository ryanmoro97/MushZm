import React from "react";
import { useState, useEffect } from "react";
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
import MushroomsCard from '../components/MushroomsCard.js'


const ShopScreen = ({navigation}) => {
  const [mushrooms, setMushrooms] = useState([])
  const app = new Realm.App({id: "mushzm-ctshl"})
  const [loading, setLoading] = useState(true)
  const Item = (title) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )

    // <ListItem title={mushroom._id} />
    // <View>
    //     {/* <Item title={mushroom.id} /> */}
    //       <TouchableOpacity>   
    //         <Text>{mushroom.item.price.toString}</Text>
    //   {/* 3      <Image style={styles.mushImg} source={{ uri: itemData.item.url }} /> // 3 */}
    //     </TouchableOpacity>
    // </View>

  ItemSeparator = () => <View style={{
    height:2,
    width: "100%",
    backgroundColor: 'gray',
  }}/>

  useEffect(() => {
    async function getData () {
    	const user = await app.logIn(Realm.Credentials.anonymous())
      const client = app.currentUser.mongoClient('mongodb-atlas')
      const mushies = client.db('MushZmStore').collection('Mushroom')
      setMushrooms((await mushies.find()).slice(0, 10))
      // console.log(mushrooms[0].price)
    }
    if (loading) {
      getData();
    }
  }, [loading])


  return (
    <View style={styles.ShopContainer}>
        <FlatList
          data={mushrooms}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View>
              <Text>ddddd{"\n"}dddddd: {item.price}</Text>
              <ListItem style={styles.mushroomListItems}
                  roundAvatar
                  title={item.price}
                  // onPress={() => this.onLearnMore(item)}
              />
            </View>
          )}
        />
    </View>
  );
};

export default ShopScreen;
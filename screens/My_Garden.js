import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, FlatList, ScrollView } from "react-native";
import images from "../src/assets/images";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import ImageList from "./ImageList";

export default function My_Garden() {
  const [count, setCount] = useState(0);
  const [isOriginal, setIsOriginal] = useState(true);
  const [buttonText, setButtonText] = useState('Follow');
  const [fav, setFav] = useState(true);
  const [plantCount, setPlantCount] = useState(ImageList.length);

  const navigation = useNavigation();
  const handleClick = () => {
    { isOriginal ? setButtonText('Following') & setCount((c) => c + 1) & setIsOriginal(false) : setButtonText('Follow') & setCount((c) => c - 1) & setIsOriginal(true) }
  }

  const iconChange = () => {
    { fav ? setFav(false) : setFav(true) }

  }

  const renderItem = item => {
    return (
      <TouchableOpacity>
        <View style={styles.rendercontainer}>
          <View style={styles.iconContainer}>
            <TouchableOpacity  onPress={iconChange}>
            {fav ? <Icon name="heart-o" size={13} color="#900" /> :
              <Icon name="heart" size={13} color="#900"/>}
            </TouchableOpacity>
          </View>
          <Image source={item.item.imageUri} style={styles.lstImage} />

          <Text style={styles.lstText}>{item.item.name}</Text>
        </View>
      </TouchableOpacity>

    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={images.profile} style={styles.image} />
          <Text style={styles.text}>Ou</Text>
        </View>
        <View>
          <View style={styles.count}>
            <View style={styles.countText}>
              <Text style={styles.text}>{plantCount}</Text>
              <Text style={styles.text}>Plants</Text>
            </View>
            <View style={styles.countText}>
              <Text style={styles.text}>0</Text>
              <Text style={styles.text}>friends</Text>
            </View>
            <View style={styles.countText}>
              <Text style={styles.text}>{count}</Text>
              <Text style={styles.text}>followers</Text>
            </View>
          </View>
          <View style={styles.btn}>
            <Button title={buttonText} onPress={handleClick} />
            <Button title="Message" />
          </View>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 20, color: 'black' }}>My babe plants</Text>
        <TouchableOpacity onPress={() => navigation.navigate('camera')}>
          <View style={styles.button}>
            <Icon name="plus" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.lstContainer}>
        <FlatList
          data={ImageList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
        />
      </ScrollView>
    </View>



  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    height: 150,
  },
  profile: {
    justifyContent: 'center',
    marginLeft: 10
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black'
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 220,
    marginLeft: 35,
    marginTop: 20,
    marginBottom: 10,
  },
  countText: {
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 40,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  lstContainer: {
    // flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    // marginBottom: 10,
    height: 100,
    // backgroundColor: 'orange'

  },
  rendercontainer: {
    flexDirection: 'column',
    // alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    margin: 3,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    // backgroundColor: 'blue',
    alignItems: "flex-end"
  },
  lstText: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
  lstImage: {
    height: 80,
    width: 80,
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain',
    // backgroundColor: 'blue',
  },

})
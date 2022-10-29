import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import ImageList from "../../../screens/ImageList";

export default function ScreenC() {
  const [tab, setTab] = useState([]);
  // setTab([...ImageList, item])
  const newArr = { ...ImageList };

  const renderItem = item => {
    return (
      <TouchableOpacity onPress={addFav(item.item, false)}>
        <View style={styles.rendercontainer}>
          <Image source={item.item.imageUri} style={styles.lstImage} />
          <Text style={styles.lstText}>{item.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  const addFav=(item, check) => {
    console.log("ou","item on addFav",item);

  }

  return (
    <View
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
         <FlatList
         data={ImageList}
         listKey={(item) => item.id}
         keyExtractor={(item, index) => index.toString()}
         renderItem={renderItem}
       />
     
    </View>
  );
}

const styles = StyleSheet.create({
  rendercontainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    margin: 3,
    marginHorizontal: 25,
    backgroundColor: '#FFFFFF',
  },
  lstImage: {
    height: 80,
    width: 80,
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain',
  },
  lstText: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
  },
})

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import ImageList from "./ImageList";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MyCollections() {

    const [fav, setFav] = useState(true);
    const addFavorite = (data, check) => {
        // { fav ? setFav(false) : setFav(true) }
      }

    const renderItem = item => {
        return (
          <TouchableOpacity>
            <View style={styles.rendercontainer}>
              <View style={styles.iconContainer}>
                <TouchableOpacity  onPress={addFavorite(item, false)}>
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
        <View>
            {/* <ScrollView
                nestedScrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.lstContainer}> */}
                <FlatList
                    data={ImageList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    numColumns={2}
                />
            {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    lstContainer: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
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
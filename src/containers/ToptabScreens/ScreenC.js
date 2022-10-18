import React from "react";
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import ImageList from "../../../screens/ImageList";

export default function ScreenC() {

    const renderItem = item => {
        return (
          <TouchableOpacity>
            <View style={styles.rendercontainer}>
              <Image source={item.item.imageUri} style={styles.lstImage} />
              <Text style={styles.lstText}>{item.item.name}</Text>
            </View>
          </TouchableOpacity>
    
        );
      }

      
    return (
        <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
            <FlatList
                data={ImageList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                />
        </ScrollView>
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

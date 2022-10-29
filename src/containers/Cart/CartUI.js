import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';
import ImageList from "../../../screens/ImageList";
import images from "../../assets/images";

export default function CartUI({ navigation }) {

  const renderItem = item => {
    return (
      <TouchableOpacity >
        <View style={[styles.rendercontainer, { backgroundColor: item.item.color }]}>
          <Image source={item.item.imageUri} style={styles.image} />
          <Text style={styles.text}>{item.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const renderHiddenItem = item => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', }}>
        <TouchableOpacity
          style={[styles.backRightBtn]}
          onPress={() => onDeleteitem && onDeleteitem(item.item)}
        >
          <Image source={images.trashbin_white} style={styles.trashbin} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <SwipeListView
        // ref={'swipeListView'}
        data={ImageList}
        keyExtractor={(item, index) => index.toString()}
        // onClickFlatListItem={this.onClickFlatListItem}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        // onDeleteitem={this.onDeleteitem}
        rightOpenValue={-75}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={300000}
      // onRowDidOpen={this.onRowDidOpen}
      // ItemSeparatorComponent={this.renderSeparator} 
      />
    </View>
  )

}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rendercontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    margin: 3,
    marginHorizontal: 15
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    color: '#FFFFFF'
  },
})
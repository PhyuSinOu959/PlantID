import React, { useState } from 'react';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';
import ImageList from '../../../screens/ImageList';

import Carousel from 'react-native-snap-carousel'; 

import { scrollInterpolator, animatedStyles } from './utils/animations';
import { TextInput } from 'react-native-gesture-handler';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i)
}

export default function ScreenA () {
    const [index, setIndex] = useState('0')

  const _renderItem = item =>{
    console.log("ou","item in renderItem", item)
    return (
      <View>
      <View style={styles.itemContainer}>
        {/* <Text style={styles.itemLabel}>{`Item ${item.item}`}</Text> */}
        <Image source={item.item.imageUri} style={styles.image} />
        <Text style={styles.text}>{item.item.name}</Text>
      </View>
        
      </View>
    );
  }

    return (
      <View>
        <Carousel
        //   ref={(c) => this.carousel = c}
          data={ImageList}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setIndex({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}   
          loop={true}       
        />
      </View>
    );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'     //dodgerblue
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    height: 180,
    width: 200,
    // borderRadius: 50/ 2,
    backgroundColor: '#FFFFFF',
    resizeMode: 'contain',
},
text: {
    alignItems: 'center',
    justifyContent: 'center',
}
});

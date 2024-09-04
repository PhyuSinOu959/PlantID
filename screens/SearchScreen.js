import React, { useState, useEffect, useCallback, useMemo } from "react";
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Keyboard, ScrollView, Image, Alert, FlatList } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import AnimatedLoader from "react-native-animated-loader";
import ModalAlertLoading from '../src/components/ModalAlertLoading';
import Child from "./Child";
import MasonryList from '@react-native-seoul/masonry-list';
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function SearchScreen({ navigation, props }) {
  const [clear, setClear] = useState(false);
  const [values, setValues] = useState('');
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [favItems, setFavItems] = useState([]);
  const [clickFav, setClickFav] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    // setInterval(() => {
    //   setVisible(!visible);
    // }, 2000);
    setValues('');
    setVisible(visible);
    setValues('');
  }, []);

  const onChangeText = (values) => {
    if (values != ' ')
      setClear(true);
    setValues(values);
  }

  const makeHitSlop = (size) => ({
    top: size,
    left: size,
    bottom: size,
    right: size,
  })

  const onClear = () => {
    <ModalAlertLoading visible={visible} />
    setClear(false);
    setValues('');
  }

  // const handleClick = useCallback(() => { setCount = count + 1 }, [count]); console.warn('ouu', 'log is render');
  const handleClick = () => {
    setCount((count) => count + 1);
    console.warn('ouu', 'log is render');
  }

  const listData = [
    {
      id: "1",
      title: "First Item",
      dimensions: { width: 1080, height: 1920 },
      imgURL:
        'https://cdn.shopify.com/s/files/1/0051/6200/8676/products/HLS_200502_09_1024x1024.jpg?v=1631864996'
    },
    {
      id: "2",
      title: "Second Item",
      dimensions: { width: 1920, height: 1000 },
      imgURL:
        'https://m.media-amazon.com/images/I/813QB6jxyBL.jpg'
    },
    {
      id: "3",
      title: "Third Item",
      dimensions: { width: 1080, height: 1920 },
      imgURL:
        'https://verdeseattle.com/wp-content/uploads/IMG_0885-scaled.jpg'
    },
    {
      id: "4",
      title: "fourth Item",
      dimensions: { width: 1080, height: 2200 },
      imgURL:
        'https://cdn.shopify.com/s/files/1/2198/4603/products/echeveriaelegans4inch_1_1200x.jpg?v=1640665903'
    },
    {
      id: "5",
      title: "First Item",
      imgURL:
        'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202134/1566/faux-potted-crassula-jade-succulent-c.jpg'
    },
    {
      id: "6",
      title: "Second Item",
      dimensions: { width: 1080, height: 3000 },
      imgURL:
        'https://iuiga-release.oss-ap-southeast-1.aliyuncs.com/uploads/skuimg/20191028/20191028172826_296.jpg!iuiga-goods-details-left'
    },
    {
      id: "7",
      title: "Third Item",
      dimensions: { width: 1080, height: 2500 },
      imgURL:
        'https://media.istockphoto.com/photos/flowers-succulent-plant-isolated-on-white-background-picture-id1283676213?b=1&k=20&m=1283676213&s=170667a&w=0&h=MYAbLUkXBD5RtSCDFZ2okZP6nZ-k87gZ50gfXKK0qIo='
    },
    {
      id: "8",
      title: "fourth Item",
      imgURL:
        'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202134/1566/faux-potted-crassula-jade-succulent-c.jpg'
    },
    {
      id: "9",
      title: "Third Item",
      imgURL:
        'https://cb2.scene7.com/is/image/CB2/PottedScclntsGryPot4p25inSHF19/$web_pdp_main_carousel_sm$/190508113949/potted-faux-succulents-4.25.jpg'
    },
    {
      id: "10",
      title: "fourth Item",
      imgURL:
        'https://media.diy.com/is/image/Kingfisher/10cm-succulent-decorative-plant~5053844310939_01c_bq?$MOB_PREV$&$width=618&$height=618'
    },
    {
      id: "11",
      title: "fourth Item",
      imgURL:
        'https://media.diy.com/is/image/Kingfisher/10cm-succulent-decorative-plant~5053844310939_01c_bq?$MOB_PREV$&$width=618&$height=618'
    },
    {
      id: "12",
      title: "Third Item",
      imgURL:
        'https://cb2.scene7.com/is/image/CB2/PottedScclntsGryPot4p25inSHF19/$web_pdp_main_carousel_sm$/190508113949/potted-faux-succulents-4.25.jpg'
    },
    {
      id: "13",
      title: "fourth Item",
      imgURL:
        'https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202134/1566/faux-potted-crassula-jade-succulent-c.jpg'
    },
    {
      id: "14",
      title: "fourth Item",
      imgURL:
        'https://cdn.shopify.com/s/files/1/2622/8410/products/bloomr-greenery-mini-potted-succulent-luxury-artificial-flowers-luxury-artificial-plants-luxury-artificial-trees-silk-orchids-wholesale-artificial-flowers-2566582206559_1024x1024.jpg?v=1552999242'
    },
  ];

  const onClickFav = (item) => {
    console.warn('ouu', ' item ', item);
    // setClickFav(!clickFav)
  }

  const renderItems = ({ item }) => {
    const randomBool = useMemo(() => Math.random() < 0.5, []);
    return (
      <TouchableOpacity
      // onPress={() => navigation.navigate('Detail')}
      >
        <View style={{ padding: 6, }}>
          <TouchableOpacity style={{ zIndex: 2 }}
            onPress={() => {
              onClickFav(item)
            }}
          >
            {clickFav ? (
              <Icon name="heart" size={20} color="#900" style={{
                position: 'absolute', right: 12, top: 12
              }} />
            ) : (
              <Icon name="heart-o" size={20} color="#900" style={{
                position: 'absolute', right: 12, top: 12
              }} />
            )}

          </TouchableOpacity>

          <Image
            source={{ uri: item.imgURL }}
            style={{
              height: randomBool ? 180 : 200,
              alignSelf: 'stretch',
              borderRadius: 15,
            }}
            resizeMode="cover"
          />
          <Text style={{ color: "black", alignSelf: 'center' }}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View
        style={styles.container}
      >
        <Icon name="search" size={20} color="#900" />
        <TextInput
          placeholder="Enter what you want"
          onChangeText={onChangeText}
          value={values}
          style={styles.textInput}
          placeholderTextColor="grey"
          spellCheck={true}
          underlineColorAndroid="transparent"
          returnKeyType="search"
          maxLength={30}
        />
        {(clear) && (
          <TouchableOpacity
            hitSlop={makeHitSlop(10)}
            onPress={onClear}
            style={styles.clearBtn}
          >
            <Icon name="close" size={24} color="#900" />
          </TouchableOpacity>
        )}
      </View>

      {/* <ContentLoader
        speed={2}
        width={400}
        height={200}
        viewBox="0 0 400 200"
        backgroundColor="#cce8b5"
        foregroundColor="#9929bd"
        {...props}
      >
        <Circle cx="50" cy="150" r="8" />
        <Circle cx="80" cy="150" r="8" />
        <Circle cx="110" cy="150" r="8" />
        <Circle cx="140" cy="150" r="8" />
      </ContentLoader> */}
      <ModalAlertLoading visible={visible} />

      <View style={styles.containerList}>
        <View style={{ marginTop: useSafeAreaInsets().top }}>
          <ScrollView>
            <MasonryList
              data={listData}
              renderItem={renderItems}
              getHeightForItem={({ item }) => item.height + 1.8}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              style={{ height: '100%' }}
              containerStyle={{ padding: 5 }}
              extradata={favItems}
            />
          </ScrollView>
        </View>
        <ModalAlertLoading visible={modalVisible} />
      </View>


    </ScrollView>

    //   <AnimatedLoader
    //   visible={visible}
    //   overlayColor="rgba(255,255,255,0.75)"
    //   source={require("./cartoon-ball-loader.json")}
    //   animationStyle={styles.lottie}
    //   speed={1}
    // />

    // <View>
    //   <Child onClick={handleClick} />
    //   <Text>{count}</Text>
    // </View>



  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(255,255,255,255)',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 12,
    margin: 20,
    marginTop: 35,
    backgroundColor: 'pink'
  },
  containerList: {
    flex: 1,
    // backgroundColor: '#CAE7D3',
    backgroundColor: 'pink',
    margin: 10,
    borderRadius: 15
  },
  textInput: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingRight: 100,
    lineHeight: 20,
    color: 'grey',
  },
  clearBtn: {
    right: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 50,
    height: 50,
  }
})



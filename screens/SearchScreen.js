import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text, StyleSheet, Keyboard, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import AnimatedLoader from "react-native-animated-loader";
import ModalAlertLoading from '../src/components/ModalAlertLoading';


export default function SearchScreen({navigation, props}) {
  const [clear, setClear] = useState(false);
  const [values, setValues] = useState('');
  const [visible, setVisible] = useState(false);

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
     
      <ContentLoader
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
      </ContentLoader>
      <ModalAlertLoading visible={visible} />
    </ScrollView>
    
    //   <AnimatedLoader
    //   visible={visible}
    //   overlayColor="rgba(255,255,255,0.75)"
    //   source={require("./cartoon-ball-loader.json")}
    //   animationStyle={styles.lottie}
    //   speed={1}
    // />
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
    backgroundColor: 'pink'
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
    right: -20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  lottie: {
    width: 50,
    height: 50,
  }
})



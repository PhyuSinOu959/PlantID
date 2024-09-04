import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Alert, StatusBar, Modal, Animated } from "react-native";
import images from "../src/assets/images";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import ImageList from "./ImageList";
import { launchImageLibrary } from 'react-native-image-picker';
import * as Keychain from 'react-native-keychain';
import { useTranslation } from 'react-i18next';
import '../src/assets/locales/i18n';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
// import MyCollections from "./myCollections";
import { useSafeAreaInsets } from "react-native-safe-area-context";
// import ActionSheet from "react-native-actions-sheet";


export default function My_Garden() {
  const [count, setCount] = useState(0);
  const [isOriginal, setIsOriginal] = useState(true);
  const [buttonText, setButtonText] = useState('Follow');
  const [plantCount, setPlantCount] = useState(ImageList.length);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("");
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Eng', value: 'en' },
    { label: 'Hindi', value: 'hi' },
    { label: 'VN', value: 'vi' },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  // const actionSheetRef = useRef < ActionSheetRef > (null);

  const changeLanguage = value => {
    i18n.changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };

  const onValueChange = (value) => {
    setSelectedValue(value);
    switch (value) {
      case 'en':
        changeLanguage('en')
        break;
      case 'hi':
        changeLanguage('hi')
        break;
      case 'vi':
        changeLanguage('vi')
        break;
      default:
        break;
    }
    // (value === 'en') ? changeLanguage('en') : changeLanguage('hi') : changeLanguage('vi')
  }

  useEffect(() => {
    (async () => {
      try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          setIsLoggedIn(true);
          setUserDetails(credentials);
        } else {
          console.log("No credentials stored");
        }
      } catch (error) {
        console.log("Keychain couldn't be accessed!", error);
      }
    })();
  }, []);

  const handleClick = () => {
    { isOriginal ? setButtonText('Following') & setCount((c) => c + 1) & setIsOriginal(false) : setButtonText('Follow') & setCount((c) => c - 1) & setIsOriginal(true) }
  }

  const AddPhotos = () => {
    var options = {
      storageOptions: {
        skipBackup: true,
        // path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        const source = { uri: res.uri };
        console.log(source)
      }
    });
  }

  const handleLogout = () => {
    // navigation.replace('Login');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#CAE7D3', }}>
      <View style={{ marginTop: useSafeAreaInsets().top }}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image source={images.profile} style={styles.image} />
            <Text style={styles.text}>Ou</Text>
          </View>
          <View>
            <View style={styles.count}>
              <View style={styles.countText}>
                <Text style={styles.text}>{plantCount}</Text>
                <Text style={styles.text}>{t('plants')}</Text>
              </View>
              <View style={styles.countText}>
                <Text style={styles.text}>0</Text>
                <Text style={styles.text}>{t('friends')}</Text>
              </View>
              <View style={styles.countText}>
                <Text style={styles.text}>{count}</Text>
                <Text style={styles.text}>{t('followers')}</Text>
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
          <TouchableOpacity onPress={AddPhotos}>
            <View style={styles.button}>
              <Icon name="plus" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Eng"
            onChangeValue={(item) => onValueChange(item)}
            // containerProps={{
            //   height: open === true ? 220 : null,
            //   backgroundColor: "#fff",
            // }}
            itemSeparator={true}
          // itemSeparatorStyle={{
          //   backgroundColor: "red",
          // }}
          />
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            // supportedOrientations='portrait-upside-down'
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <TouchableOpacity style={{
            alignItems: 'center',
            paddingTop: 20,
          }}
            onPress={() => setModalVisible(true)}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Show Modal</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: '20%' }} />
        <View>
          <TouchableOpacity style={styles.btnLogout} onPress={handleLogout} >
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    marginLeft: 10,
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
    color: 'black',
    fontSize: 20
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
  container1: {
    // flex: 1,
    paddingTop: 40,
    alignItems: "center",
    // backgroundColor: 'pink',
    // borderRadius: 30,
    zIndex: 100
  },
  container2: {
    // backgroundColor: 'yellow',
    marginTop: 10,
    padding: 10,
    width: '30%',
    justifyContent: 'center',
    alignSelf: 'center',
    position: "relative",
    zIndex: 10
  },
  container3: {
    backgroundColor: 'yellow',
    marginTop: 10,
    padding: 10,
    width: '25%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container4: {
    backgroundColor: 'yellow',
    marginTop: 10,
    padding: 10,
    width: '25%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnLogout: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 12,
    margin: 20,
    borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})
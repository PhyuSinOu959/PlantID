import React, { useState, useMemo, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, Alert, TouchableOpacity, Modal, ScrollView, Pressable, AsyncStorage, StatusBar } from "react-native";
import images from "../src/assets/images";
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalAlertLoading from '../src/components/ModalAlertLoading';
import ImageList from "./ImageList";
import { useTranslation } from 'react-i18next';
import '../src/assets/locales/i18n';
import { useTheme } from '@react-navigation/native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MasonryList from '@react-native-seoul/masonry-list';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();
    const route = useRoute()
    const name = route.params ? route.params.name : undefined

    const [modalVisible, setModalVisible] = useState(false);
    // const [count, setCount] = React.useState(0);
    const { t, i18n } = useTranslation();
    const [currentLanguage, setLanguage] = useState('en');
    const countries = ["Eng", "Hindi"]
    const { colors } = useTheme();
    StatusBar.setBackgroundColor('transparent', false);


    const showMessage = () => {
        // setModalVisible(true);
        Alert.alert('Function Called...');
    }

    const renderItem = item => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details')} >
                <View style={[styles.rendercontainer, { backgroundColor: item.item.color }]}>
                    <Image source={item.item.imageUri} style={styles.image} />
                    <Text style={styles.text}>{item.item.name}</Text>
                </View>
            </TouchableOpacity>

        );
    }

    const searchBtn = () => {
        Alert.alert('Function Called...');
    }

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerRight: () => (
    //         // <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
    //         <TouchableOpacity  style={styles.search} onPress={searchBtn}>
    //         <Icon name="search" size={20} color="#900" />
    //         </TouchableOpacity>
    //       ),
    //     });
    //   }, [navigation]);

    return (
        <View style={styles.container}>
            {/* <View style={styles.searchContainer}>
            <TouchableOpacity  style={styles.search}>
            <Icon name="search" size={20} color="#900" />
            </TouchableOpacity>
            </View> */}
            {/* <View>
            <Text>Count: {count}</Text>
            </View> */}
            <View style={{ marginTop: useSafeAreaInsets().top }}>
                <View style={{ justifyContent: 'space-between' }}>
                    <View style={{ margin: 10 }}>
                        <Text style={[styles.title, { color: colors.text }]}>{t('welcome')}{name}{t('plantToday')}</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={ImageList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            <ModalAlertLoading visible={modalVisible} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CAE7D3',
        // paddingHorizontal: 2,
        // paddingTop: 50
    },
    rendercontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 25,
        margin: 3,
        marginHorizontal: 15,
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
    search: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        borderRadius: 30,
        height: 35,
        padding: 8
    },
    searchContainer: {
        flex: 1,
        backgroundColor: '#B5E5CF',
        paddingHorizontal: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },

})
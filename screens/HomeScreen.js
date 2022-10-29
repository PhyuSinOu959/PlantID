import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, Alert, TouchableOpacity, Modal, ScrollView } from "react-native";
import images from "../src/assets/images";
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalAlertLoading from '../src/components/ModalAlertLoading';
import ImageList from "./ImageList";


export default function HomeScreen({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);
    // const [count, setCount] = React.useState(0);

    const showMessage=()=>{
        // setModalVisible(true);
        Alert.alert('Function Called...') ;  
    }
    
    const renderItem= item =>{
        return( 
        <TouchableOpacity onPress={()=>navigation.navigate('Details')} >
            <View style={[styles.rendercontainer, {backgroundColor:item.item.color}]}>
                <Image source={item.item.imageUri} style={styles.image} />
                <Text style={styles.text}>{item.item.name}</Text>
            </View>
        </TouchableOpacity>
    
        );
    }

    const searchBtn=()=>{
        Alert.alert('Function Called...') ;     
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
            <View style={{margin: 10}}>
                <Text style={styles.title}>Water Today</Text>
            </View>

            <FlatList
                data={ImageList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <ModalAlertLoading visible={modalVisible}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
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
        marginHorizontal: 15
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 50/ 2,
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
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        margin: 10
    }
    
})
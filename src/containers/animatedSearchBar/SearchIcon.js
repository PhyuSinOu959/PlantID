import React,{useState} from "react";
import {View,TextInput, Alert, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchIcon(isSearchActive,searchValue,onSearchClear,onSearchPress){
    const [clear, setClear] = useState(false);
    const [values, setValues] = useState('');
    const [visible, setVisible] = useState(false);

    if (isSearchActive && searchValue.length === 0) {
        return null;
    }

    const iconProps = {};

    if (isSearchActive && searchValue.length > 0) {
        iconProps.name = 'clear';
        iconProps.color = 'grey';
        iconProps.onPress = onSearchClear;
    } else {
        iconProps.name = 'search';
        iconProps.color = 'white';
        iconProps.onPress = onSearchPress;
    }

    return(
        <View>
            <Icon name="search"  color="white" size={20} {...iconProps}  />
        </View>
    )
}

const styles= StyleSheet.create({
    search: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
        borderRadius: 30,
        height: 35,
        padding: 8
    },
})
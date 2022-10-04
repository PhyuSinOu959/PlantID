import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Alert } from "react-native";
import SearchIcon from "./SearchIcon";
import CenterText from "./CenterText";

export default function AnimatedSearchBarUI(props) {
    const [isSearchActive, setIsSearchActive] = useState('false');
    const [clear, setClear] = useState(false);
    const [values, setValues] = useState('');

    
    const onSearchTextChanged = (values) => {
        if (values != ' ')
        setValues(values);
    }
    const onSearchPressed=()=>{
        Alert.alert('Function Called...') ; 
        setIsSearchActive('true')
    }
    const onSearchClearPressed = () => {
        onSearchTextChanged('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.toolbarContainer}>
                <CenterText
                    title="Animation"
                    isSearchActive={isSearchActive} 
                    onSearchTextChange={onSearchTextChanged}
                    searchValue={values}
                    />
                <SearchIcon
                    isSearchActive={isSearchActive}
                    onSearchPress={onSearchPressed}
                    searchValue={values}
                    onSearchClear={onSearchClearPressed}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: 'green',
        elevation: 4,
    },
    toolbarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        height: 56,
        flex: 1,
    },
})

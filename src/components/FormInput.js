import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
// import { TextInput } from "@react-native-material/core";

const FormInput = (props) => {
    const { touched, error } = props.meta

    return (
        <View >
            {/* <View style={styles.labelContainer}>
                <Text>{props.input.name}</Text>
            </View> */}
            <View style={styles.ViewContainer}>
                <TextInput
                    {...props}
                    value={props.input.value}
                    onChangeText={props.input.onChange}
                    onFocus={props.input.onFocus}
                    onBlur={props.input.onBlur}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.TextInput}
                    placeholder={props.placeholder}
                    placeholderTextColor='grey'
                />
            </View>
            <View>
                {error && touched ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : null}
            </View>
            {/* <View style={styles.TextInput}>
                <TextInput
                    {...props}
                    variant="outlined"
                    label={props.input.name}
                    color="#009688"
                />
            </View>
            <View>
                {error && touched ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : null}
            </View> */}

        </View>
    )
}

export default FormInput;

const styles = StyleSheet.create({
    labelContainer: {
        backgroundColor: "#CAE7D3",
        zIndex: 1,
        position: "absolute",
        marginStart: 30,
        alignSelf: "flex-start",
        paddingHorizontal: 3,
    },
    ViewContainer: {
        borderColor: "gray",
        borderWidth: 0.5,
        margin: 10,
        borderRadius: 20,
        zIndex: 0,
    },
    TextInput: {
        paddingLeft: 10,
        color: 'black',
    },
    errorText: {
        color: 'red',
        paddingLeft: 10,
    },
    // TextInput: {
    //     margin: 16,
    //     backgroundColor: "#CAE7D3",
    //     borderRadius: 20,
    // },
})

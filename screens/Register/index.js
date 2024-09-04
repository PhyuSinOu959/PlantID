import React, { useState } from "react";
import { ScrollView, Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import FormInput from "../../src/components/FormInput";
import ValidateRegex from "../../src/utils/ValidateRegex";
import { useNavigation } from '@react-navigation/native';

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

const RegisterScreen = (props) => {
    const navigation = useNavigation();
    const [isShown, setIsShown] = useState(false);

    const { itemId } = props.route.params || {};
    console.warn('itemid', itemId)

    const onSubmit = (values) => {
        console.warn(values);
        props.reset()
    }
    return (
        // <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.viewContainer}>
            <View style={styles.txtContainer} >
                <Text style={styles.headerTxt}>Sign Up</Text>
            </View>
            <View style={styles.formContainer}>
                <Field
                    name="name"
                    label="Name"
                    component={FormInput}
                    maxLength={30}
                    placeholder="Enter your Name"
                />
                <Field
                    name="email"
                    label="Email"
                    component={FormInput}
                    validate={email}
                    placeholder="Enter your Email"
                />
                <Field
                    name="password"
                    label="Password"
                    component={FormInput}
                    secureTextEntry={!isShown}
                    placeholder="Enter your Password"
                />
                <Field
                    name="confirmpassword"
                    label="ConfirmPassword"
                    component={FormInput}
                    secureTextEntry={!isShown}
                    placeholder="Confirm your Password"
                />
                <TouchableOpacity
                    onPress={props.handleSubmit(onSubmit)}
                    style={styles.appButtonContainer}
                >
                    <Text style={styles.appButtonText}>{"Submit"}</Text>
                </TouchableOpacity>
                <Text style={styles.txtReg}>Already a member.
                    <Text style={{ textDecorationLine: 'underline', marginLeft: 5, color: 'blue' }}
                        onPress={() => navigation.navigate('Login')} > Login</Text>
                    <Text> here</Text>
                </Text>

            </View>
        </View>
        // </ScrollView >
    )
}

function validate(values) {
    const errors = {};
    const { name, email } = values;
    // if (!values.name) {
    //     errors.name = "Name is required";
    // }
    if (!name) {
        errors.name = "*Name is required*";
    }
    if (!email) {
        errors.email = "*Email is required*";
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = 'Required';
    } else if (values.confirmpassword !== values.password) {
        errors.confirmpassword = 'Password mismatched';
    }
    if (values.password && !ValidateRegex.PASSWORD.test(values.password)) {
        errors.password = 'pinMust6Charecter';
    }
    return errors;
}
export default reduxForm({
    form: 'myForm',
    validate
})(RegisterScreen)

const styles = StyleSheet.create({
    scrollViewContainer: {
        padding: 20,
    },
    viewContainer: {
        flex: 1,
        backgroundColor: "#CAE7D3",
        justifyContent: 'center',
        padding: 10
    },
    txtContainer: {
        alignItems: 'center',
    },
    headerTxt: {
        fontWeight: "bold",
        fontSize: 28,
    },
    formContainer: {
        marginTop: 30
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20,
        borderRadius: 20,
    },
    txtReg: {
        fontSize: 15,
        alignSelf: "center",
    }
})
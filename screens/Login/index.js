import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import FormInput from '../../src/components/FormInput';
import { Field, reduxForm } from 'redux-form';
import ValidateRegex from '../../src/utils/ValidateRegex';
import { useNavigation } from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = (props) => {
    const navigation = useNavigation();
    const [isShown, setIsShown] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({});
    const [disable, setDisable] = useState(false);
    const { colors } = useTheme();

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

    const handleLogin = async (values) => {
        const username = values.name;
        const password = values.password;
        await Keychain.setGenericPassword(username, password);
        // setIsLoggedIn(true);
        // setDisable(true)
        setUserDetails({ password, username });
        navigation.navigate("Home", {
            screen: 'home',
            params: { name: username },
        }) &&
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
        props.reset();
    };

    const handleLogout = async () => {
        const logout = await Keychain.resetGenericPassword();
        if (logout) {
            setIsLoggedIn(false);
            setUserDetails({});
        }
    }


    return (
        <View style={styles.viewContainer}>
            {/* {!isLoggedIn ? ( */}
            <View>
                <View style={styles.txtContainer} >
                    <Text style={[styles.headerTxt, { color: colors.text }]}>Login</Text>
                </View>
                <View style={styles.formContainer}>
                    <Field
                        name="name"
                        label="Name"
                        component={FormInput}
                        maxLength={30}
                        placeholder="Enter Username"
                    // onChangeText={(name) => setName(name)}
                    />
                    <Field
                        name="password"
                        label="Password"
                        keyboardType="number-pad"
                        component={FormInput}
                        secureTextEntry={!isShown}
                        placeholder="Enter Password"
                    // onChangeText={(password) => setPassword(password)}
                    />
                    <TouchableOpacity style={styles.btnTouch}
                        onPress={props.handleSubmit(handleLogin)}
                    // disabled={disable}
                    >
                        <Text style={styles.txt}>Login</Text>
                    </TouchableOpacity>
                    <Text style={[styles.txtReg, { color: colors.text }]}>Don't have an account.
                        <Text style={{ textDecorationLine: 'underline', marginLeft: 5, color: 'green' }}
                            onPress={() => navigation.navigate('Register')} > Register</Text>
                        <Text> here</Text>
                    </Text>
                    <View style={{ height: 25 }} />
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => { Linking.openURL('https://instagram.com/plant_byou?igshid=MzNlNGNkZWQ4Mg==') }}>
                            <Icon name="instagram" size={30} style={{ color: 'green', paddingHorizontal: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="facebook" size={30} onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=100072294830464&mibextid=ZbWKwL') }} style={{ color: 'green', paddingHorizontal: 10 }} />
                        </TouchableOpacity>
                        <Icon name="twitter" size={30}
                            onPress={() => { Linking.openURL('https://www.facebook.com/profile.php?id=100072294830464&mibextid=ZbWKwL') }}
                            style={{ color: 'green', paddingHorizontal: 10 }} />
                    </View>

                </View>
            </View>
            {/* ) : null
                // (
                //     <View>
                //         <Text style={styles.welcomeText}>
                //             Welcome back! {userDetails.username}
                //         </Text>
                //         <Text style={styles.logoutBtn} onPress={handleLogout} >Logout</Text>
                //     </View>
                // )
            } */}
        </View>
    )
}
function validate(values) {
    const errors = {};
    if (!values.name) {
        errors.name = "*Required";
    }
    if (!values.password) {
        errors.password = '*Required';
    }
    if (values.password && !ValidateRegex.PASSWORD.test(values.password)) {
        errors.password = 'pinMust6Charecter';
    }
    return errors;
}
export default reduxForm({
    form: 'LoginForm',
    validate
})(LoginScreen)

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: "#CAE7D3",
        justifyContent: 'center',
        padding: 20,
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
    btnTouch: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20,
        borderRadius: 20,
    },
    txt: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    txtReg: {
        fontSize: 15,
        alignSelf: "center",
    },
    welcomeText: {
        color: "white",
        marginBottom: 20,
        fontSize: 30,
    },
    logoutBtn: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        backgroundColor: "#ff1178",
        borderRadius: 25,
        color: "white",
        textAlign: "center",
    },
})
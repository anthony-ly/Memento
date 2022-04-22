import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';


const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(8).label("Password"),
    }
);

/**
 * checks if the values passed are equal to the values inside the users array
 */
const validateUser = ({ email, password }) => {
    let data = DataManager.getInstance().getUsers();
    return (
        // users.filter((user) => user.email === email && user.password === password).length > 0
        data.filter((user) => user.email === email && user.password === password).length > 0
    );
}

/**
 * returns the logged in user's details based on their email address
 */
const getUser = ({ email }) => {
    // let commonData = DataManager.getInstance();
    // let userID = getUser({email}).id;
    // commonData.setUserID(userID);
    // return users.find((user) => user.email === email);
    let data = DataManager.getInstance().getUsers();
    console.log("login[getUser]:", data);
    return data.find((user) => user.email === email);
}

/**
 * assigns the DataManager the value of the user who has successfully logged in
 */
const createUser = ({ email }) => {
    let commonData = DataManager.getInstance();
    let userID = getUser({ email }).id;
    commonData.setUserID(userID);
}

function LoginScreen({ navigation }) {
    return (
        <AppScreen style={styles.container}>
            {/* top section */}
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="camera"
                    size={60}
                    color={AppColors.otherColor} />
                <AppText style={{ fontWeight: "bold", marginTop: 20 }} size={50}>Login</AppText>
            </View>

            <Formik
                initialValues={{ email: '', password: '', }}
                onSubmit={(values, { resetForm }) => {
                    if (validateUser(values)) {
                        resetForm();
                        createUser(values);
                        navigation.navigate("My Memories", {
                            screen: "Account",
                            params: {
                                paramEmail: values.email,
                                paramName: getUser(values).fullname
                                // TODO get image as well
                            }
                        }
                        )
                    } else {
                        resetForm();
                        alert("Invalid Login Details")
                    }
                }}
                validationSchema={schema}
            >
                {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <View style={styles.textInputContainer}>
                            <AppTextInput
                                icon="email"
                                placeholder="Email Address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                value={values.email}
                                onBlur={() => setFieldTouched("email")}
                                onChangeText={handleChange("email")}
                            />
                            {touched.email && <AppText style={{ color: "red" }}>{errors.email}</AppText>}
                            <AppTextInput
                                icon="lock"
                                placeholder="Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                value={values.password}
                                onBlur={() => setFieldTouched("password")}
                                onChangeText={handleChange("password")}
                            />
                            {touched.password && < AppText style={{ color: "red" }}>{errors.password}</AppText>}

                            <AppButton title="Login" color="secondaryColor" onPress={handleSubmit} />
                        </View >


                    </>
                )}
            </Formik>
        </AppScreen >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.primaryColor,
        padding: 25,
    },

    welcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 100,
    },

    textInputContainer: {
        // marginTop: 200,
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LoginScreen;
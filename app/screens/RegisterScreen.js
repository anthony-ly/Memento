import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

import DataManager from '../config/DataManager';

// error checking
const schema = Yup.object().shape(
    {
        fullname: Yup.string().required().label("Full Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(8).label("Password"),
    }
);

/**
 * checks if the values passed are equal to the values inside the users array
 */
const validateUser = ({ email }) => {
    let data = DataManager.getInstance().getUsers();
    return (
        // users.filter((user) => user.email === email && user.password === password).length > 0
        data.filter((user) => user.email === email).length > 0
    );
}

/**
 * assigns the DataManager the value of the user who has successfully registered
 */
const createUser = (data) => {
    let commonData = DataManager.getInstance();
    commonData.addUser(data);
}

function RegisterScreen({ navigation }) {
    return (
        <AppScreen style={styles.container}>

            {/* Header */}
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="camera"
                    size={60}
                    color={AppColors.otherColor} />
                <AppText style={{ fontWeight: "bold", marginTop: 20 }} size={50}>Register</AppText>
            </View>

            {/* Input */}
            <Formik
                initialValues={{ fullname: '', email: '', password: '', }}
                onSubmit={(values, { resetForm }) => {
                    if (!validateUser(values)) { // if the email does not exist, register them
                        resetForm();
                        createUser(values);
                        navigation.navigate("Welcome")
                    } else {
                        resetForm();
                        alert("Invalid Details")
                    }
                }}
                validationSchema={schema}
            >
                {({ values, handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <View style={styles.textInputContainer}>
                        {/* Name field */}
                        <AppTextInput
                            icon="account"
                            placeholder="Full Name"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={values.fullname}
                            onBlur={() => setFieldTouched("fullname")}
                            onChangeText={handleChange("fullname")}
                        />
                        {touched.fullname && <AppText style={{ color: "red" }}>{errors.fullname}</AppText>}

                        {/* Email field */}
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

                        {/* Password field */}
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

                        {/* Sign up button */}
                        <AppButton style={styles.button} title="Sign Up" color="secondaryColor" onPress={handleSubmit} />
                    </View >
                )}
            </Formik>

        </AppScreen>


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
    },

    textInputContainer: {
        marginTop: 75,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default RegisterScreen;
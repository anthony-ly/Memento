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

const schema = Yup.object().shape(
    {
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).max(8).label("Password"),
    }
);

const users = [
    {
        name: "tester1",
        email: "test1@mail.com",
        password: "1234"
    },
    {
        name: "tester2",
        email: "test2@mail.com",
        password: "5678"
    },
];

const validateUser = ({ email, password }) => {
    return (
        users.filter((user) => user.email === email && user.password === password).length > 0
    );
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
                <AppText style={{ fontSize: "50", fontWeight: "bold", marginTop: 20 }}>Login</AppText>
            </View>

            <Formik
                initialValues={{ email: '', password: '', }}
                onSubmit={(values, { resetForm }) => {
                    if (validateUser(values)) {
                        console.log(values);
                        resetForm();
                        navigation.navigate("My Memories")
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
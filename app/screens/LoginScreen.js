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

function LoginScreen(props) {



    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="library"
                    size={60}
                    color={AppColors.primaryColor} />
            </View>

            <Formik
                initialValues={{ email: '', password: '', }}
                onSubmit={values => console.log(values)}
                validationSchema={schema}
            >
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <View style={styles.textInputContainer}>
                            <AppTextInput
                                icon="email"
                                placeholder="Email Address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
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
                                onBlur={() => setFieldTouched("password")}
                                onChangeText={handleChange("password")}
                            />
                            {touched.password && < AppText style={{ color: "red" }}>{errors.password}</AppText>}
                        </View >
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>


        </AppScreen >


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.otherColor,
        padding: 25,
    },

    welcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    textInputContainer: {
        marginTop: 75,
    }
})

export default LoginScreen;
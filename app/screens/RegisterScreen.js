import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import DataManager from '../config/DataManager';

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
const validateUser = ({ fullname, email, password }) => {
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
    console.log("register[CREATEUSER]", data)
    commonData.addUser(data);
}

function RegisterScreen({ navigation }) {

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <AppScreen style={styles.container}>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="camera"
                    size={60}
                    color={AppColors.otherColor} />
                <AppText style={{ fontWeight: "bold", marginTop: 20 }} size={50}>Register</AppText>
            </View>

            <Formik
                initialValues={{ fullname: '', email: '', password: '', }}
                onSubmit={(values, { resetForm }) => {
                    if (!validateUser(values)) { // if the email does not exist, register them
                        resetForm();
                        createUser(values);
                        console.log("register", values);
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
                        <AppTextInput
                            // icon="account"
                            // placeholder="Full Name"
                            // autoCapitalize="none"
                            // autoCorrect={false}
                            // onChangeText={userInputName => setUserName(userInputName)}
                            icon="account"
                            placeholder="Full Name"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={values.fullname}
                            onBlur={() => setFieldTouched("fullname")}
                            onChangeText={handleChange("fullname")}
                        />
                        {touched.fullname && <AppText style={{ color: "red" }}>{errors.fullname}</AppText>}
                        <AppTextInput
                            // icon="email"
                            // placeholder="Email Address"
                            // autoCapitalize="none"
                            // autoCorrect={false}
                            // keyboardType="email-address"
                            // onChangeText={userInputEmail => setEmail(userInputEmail)}
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
                            // icon="lock"
                            // placeholder="Password"
                            // autoCapitalize="none"
                            // autoCorrect={false}
                            // secureTextEntry={true}
                            // onChangeText={userInputPassword => setPassword(userInputPassword)}
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
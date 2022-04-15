import { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AppColors from '../config/AppColors';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function LoginScreen(props) {

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
                <AppText style={{ fontSize: "50", fontWeight: "bold", marginTop: 20 }}>Register</AppText>
            </View>
            <View style={styles.textInputContainer}>
                <AppTextInput
                    icon="account"
                    placeholder="Full Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={userInputName => setUserName(userInputName)} />

                <AppTextInput
                    icon="email"
                    placeholder="Email Address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    onChangeText={userInputEmail => setEmail(userInputEmail)} />

                <AppTextInput
                    icon="lock"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={userInputPassword => setPassword(userInputPassword)} />
                <AppButton style={styles.button} title="Sign Up" color="secondaryColor" onPress={() => console.log(email, password)} />
            </View >

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

export default LoginScreen;
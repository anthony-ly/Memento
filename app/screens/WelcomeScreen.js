import React from 'react';
import { StyleSheet, ImageBackground, Platform, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';

function WelcomeScreen(props) {
    return (
        <AppScreen>
            <View style={styles.banner}>
                <MaterialCommunityIcons
                    name="camera"
                    size={60}
                    color={AppColors.otherColor} />
                <AppText style={{ fontSize: 50, fontWeight: "bold", textAlign: 'center' }}>Welcome to Memento</AppText>
            </View>

            <View style={styles.buttonContainer}>
                {/* <AppButton title="Login" onPress={() => navigation.navigate("Login")} /> */}
                <AppButton title="Login" color="secondaryColor" onPress={() => console.log("Login")} />
                {/* <AppButton title="Register" color="secondaryColor" onPress={() => navigation.navigate("Register")} /> */}
                <AppButton title="Register" text="white" color="otherColor" onPress={() => console.log("Register")} />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    banner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },

    buttonContainer: {
        marginTop: 250,
        // marginEnd: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 120,
        alignSelf: 'center',
        width: '50%',
    }
})

export default WelcomeScreen;
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import AppColors from '../config/AppColors';

function AppScreen({ children, style }) {
    return (
        <View style={styles.background}>
            <SafeAreaView style={[styles.screen, style]}>
                {children}
            </SafeAreaView>
        </View>

    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: AppColors.primaryColor,
    },
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        // backgroundColor: AppColors.primaryColor,
    },
})

export default AppScreen;


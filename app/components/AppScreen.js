import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import AppColors from '../config/AppColors';

function AppScreen({ children, style }) {
    return (
        <View style={styles.background}>
            <SafeAreaView style={[styles.screen, style]}>
                <View style={styles.paddingView}>
                    {children}
                </View>
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
    },
    paddingView: {
        padding: 20,
    }
})

export default AppScreen;


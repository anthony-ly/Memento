import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children }) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "SF Pro"
    }
})

export default AppText;
import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({ children, style, size = 20 }) {
    return (
        <Text style={[styles.text, style, { fontSize: size }]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        // fontFamily: Platform.OS === 'android' ? "Roboto" : "SF Pro"
    }
})

export default AppText;
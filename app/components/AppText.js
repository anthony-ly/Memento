import React from 'react';
import { Text, StyleSheet } from 'react-native';

function AppText({ children, style, size = 20 }) {
    return (
        <Text style={[styles.text, style, { fontSize: size }]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})

export default AppText;
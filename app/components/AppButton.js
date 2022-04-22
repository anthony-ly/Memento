import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import AppColors from '../config/AppColors';

function AppButton({ title, color = "primaryColor", text = "black", onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, { backgroundColor: AppColors[color] }]}>
                <Text style={[styles.text, { color: AppColors[text] }]}> {title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.otherColor,
        borderRadius: 20,
        width: 200,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: AppColors.black,
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default AppButton;

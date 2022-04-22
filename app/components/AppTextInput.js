import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppColors from '../config/AppColors';

function AppTextInput({ icon, size = '80%', ...otherProps }) {
    return (
        <View style={[styles.container, { width: size }]}>
            {icon && <MaterialCommunityIcons name={icon} size={22} />}
            <TextInput style={styles.textInput} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        flexDirection: "row",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },

    textInput: {
        fontSize: 20,
        color: "#000",
        marginLeft: 10,
        flex: 1,
    },
})
export default AppTextInput;
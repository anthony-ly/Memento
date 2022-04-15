import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppColors from '../config/AppColors';
function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
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
        width: '80%'
    },

    textInput: {
        fontSize: 20,
        // fontFamily: Platform.OS === 'android' ? "monospace" : "Cochin",
        color: "#000",
        marginLeft: 10,
        flex: 1,
    },
})
export default AppTextInput;
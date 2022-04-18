import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppColors from '../config/AppColors';
import AppText from './AppText';
function AppPicker({ icon, placeholder, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={24} />}
            <AppText style={styles.text}> {placeholder} </AppText>
            <MaterialCommunityIcons name="chevron-down" size={24} />
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
        width: '100%'
    },

    text: {

        flex: 1,
    },
})
export default AppPicker;
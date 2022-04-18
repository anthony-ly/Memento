import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppColors from '../config/AppColors';
import AppText from './AppText';
import AppScreen from './AppScreen';
function AppPicker({ icon, placeholder, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={24} />}
                    <AppText style={styles.text}> {placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={24} />
                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                </AppScreen>
            </Modal>
        </>
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
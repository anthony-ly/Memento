import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppColors from '../config/AppColors';
import AppPickerItem from './AppPickerItem';
import AppScreen from './AppScreen';
import AppText from './AppText';

function AppPicker({ data, icon, placeholder, selectedItem, onSelectItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            {/* Default view for the AppPicker (before it is pressed */}
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={24} />}
                    <AppText style={styles.text}> {selectedItem ? selectedItem.label : placeholder} </AppText>
                    <MaterialCommunityIcons name="chevron-down" size={24} />
                </View>
            </TouchableWithoutFeedback>

            {/* Modal for the AppPicker that lists data in a FlatList */}
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <AppPickerItem
                                icon={item.icon}
                                label={item.label}
                                backgroundColor={item.backgroundColor}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }} />}
                    />
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
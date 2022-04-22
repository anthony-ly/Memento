import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableHighlight, Modal, Button } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppButton from './AppButton';
import AppColors from '../config/AppColors';
import AppPicker from './AppPicker';
import AppScreen from './AppScreen';
import AppText from '../components/AppText'
import AppTextInput from './AppTextInput';

import DataManager from '../config/DataManager';


/**
 * 
 * @returns the array of categories in the data manager
 */
const getCategories = () => {
    let commonData = DataManager.getInstance();
    let categories = commonData.getCategories();

    return categories;
}

function AppCard({ id, title, subtitle, image, onSwipeLeft }) {
    // Use states for setting the latest value for the corresponding memory info fields
    const [newTitle, setTitle] = useState(title);
    const [newSubtitle, setSubTitle] = useState(subtitle);
    const [newCategory, setCategory] = useState();

    const [modalVisible, setModalVisible] = useState(false);
    const categoryList = getCategories();

    return (
        <>
            <Swipeable renderRightActions={onSwipeLeft}>
                <TouchableHighlight onPress={() => {
                    // If the user presses on the AppCard, display the modal that has the AppCard info
                    setModalVisible(true);
                }} underlayColor={AppColors.primaryColor}>
                    {/* App card info containing the image, title and subtitle of the memory */}
                    <View style={styles.container}>
                        {isFinite(image) ? <Image source={image} style={styles.image} /> : <Image source={{ uri: image }} style={styles.image} />}
                        <View style={styles.text}>
                            <AppText style={styles.title}>{newTitle}</AppText>
                            <AppText style={styles.subtitle}>{newSubtitle}</AppText>
                        </View>
                    </View>
                </TouchableHighlight >
            </Swipeable>

            {/* CODE FOR UPDATING MEMORY DATA */}
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen style={styles.form}>
                    <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                    {/* Title field */}
                    <AppTextInput
                        icon="camera"
                        placeholder="New Title"
                        value={newTitle}
                        size="100%"
                        onChangeText={(inputText) => setTitle(inputText)}
                    />

                    {/* Description field */}
                    <AppTextInput
                        icon="clipboard"
                        placeholder="New Description"
                        value={newSubtitle}
                        size="100%"
                        onChangeText={(inputText) => setSubTitle(inputText)}
                    />

                    {/* Collection Category Picker */}
                    <AppPicker
                        selectedItem={newCategory}
                        onSelectItem={item => setCategory(item)}
                        data={categoryList}
                        icon="apps"
                        placeholder="Categories"
                    />

                    {/* Update memory info button */}
                    <View style={styles.button}>
                        <AppButton title="Update Memory" color="secondaryColor" onPress={() => {
                            let commonData = DataManager.getInstance();
                            commonData.updateMemory(id, newTitle, newSubtitle, newCategory);
                            setModalVisible(false);
                        }} />
                    </View>


                </AppScreen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.secondaryColor,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 20,
    },
    text: {
        paddingLeft: 20,
        paddingBottom: 10,
    },
    image: {
        height: 200,
        width: "100%",
    },
    title: {
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
    },
    button: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
    }
})

export default AppCard;
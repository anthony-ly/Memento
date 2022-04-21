import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight, Modal, Button } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppColors from '../config/AppColors';
import AppText from '../components/AppText'
import AppScreen from './AppScreen';
import AppTextInput from './AppTextInput';
import AppPicker from './AppPicker';
import AppButton from './AppButton';
import DataManager from '../config/DataManager';


const getCategories = () => {
    let commonData = DataManager.getInstance();
    let categories = commonData.getCategories();

    return categories;
}

function AppCard({ id, title, subtitle, category, image, onSwipeLeft }) {
    const [newTitle, setTitle] = useState("");
    const [newSubtitle, setSubTitle] = useState("");
    const [newCategory, setCategory] = useState();

    const [modalVisible, setModalVisible] = useState(false);

    const categoryList = getCategories();
    return (
        // for touchable highlight, make there be a border radius
        <>
            <Swipeable renderRightActions={onSwipeLeft}>
                <TouchableHighlight onPress={() => setModalVisible(true)} underlayColor={AppColors.primaryColor}>
                    <View style={styles.container}>
                        <Image source={image} style={styles.image} />
                        <View style={styles.text}>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppText style={styles.subtitle}>{subtitle}</AppText>
                        </View>
                    </View>
                </TouchableHighlight >
            </Swipeable>

            {/* CODE FOR UPDATING MEMORY DATA */}
            <Modal visible={modalVisible} animationType="slide">
                <AppScreen>
                    <Button title="Close" onPress={() => setModalVisible(false)}></Button>
                    <AppText>{title}-{subtitle}-{category}</AppText>
                    <AppTextInput
                        icon="camera"
                        placeholder="New Title"
                        value={newTitle}
                        onChangeText={(inputText) => setTitle(inputText)}
                    />

                    <AppTextInput
                        icon="calendar-month"
                        placeholder="New Date"
                        value={newSubtitle}
                        onChangeText={(inputText) => setSubTitle(inputText)}
                    />

                    <AppPicker
                        selectedItem={newCategory}
                        onSelectItem={item => setCategory(item)}
                        data={categoryList}
                        icon="apps"
                        placeholder="Categories"
                    />

                    <AppButton title="Update Memory" color="secondaryColor" onPress={() => {
                        // console.log(id, newTitle, newSubtitle, newCategory);
                        let commonData = DataManager.getInstance();
                        commonData.updateMemory(id, newTitle, newSubtitle, newCategory);
                    }} />

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
    }
})

export default AppCard;
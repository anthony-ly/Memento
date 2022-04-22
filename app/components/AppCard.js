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

function AppCard({ id, title, subtitle, category, image, onSwipeLeft, navigation }) {
    const [newTitle, setTitle] = useState(title);
    const [newSubtitle, setSubTitle] = useState(subtitle);
    const [newCategory, setCategory] = useState();

    const [modalVisible, setModalVisible] = useState(false);

    const categoryList = getCategories();
    return (
        // for touchable highlight, make there be a border radius
        <>
            <Swipeable renderRightActions={onSwipeLeft}>
                <TouchableHighlight onPress={() => {
                    // reset the modal stuff here
                    setModalVisible(true);
                }} underlayColor={AppColors.primaryColor}>
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
                    {/* <AppText style={{ fontWeight: "bold", marginTop: 20, marginBottom: 20 }} size={30}>Update Memory</AppText> */}
                    <AppTextInput
                        icon="camera"
                        placeholder="New Title"
                        value={newTitle}
                        size="100%"
                        onChangeText={(inputText) => setTitle(inputText)}
                    />

                    <AppTextInput
                        icon="clipboard"
                        placeholder="New Description"
                        value={newSubtitle}
                        size="100%"
                        onChangeText={(inputText) => setSubTitle(inputText)}
                    />

                    <AppPicker
                        selectedItem={newCategory}
                        onSelectItem={item => setCategory(item)}
                        data={categoryList}
                        icon="apps"
                        placeholder="Categories"
                    />

                    <View style={styles.button}>
                        <AppButton title="Update Memory" color="secondaryColor" onPress={() => {
                            console.log(id, newTitle, newSubtitle, newCategory);
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
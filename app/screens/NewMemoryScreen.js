import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import AppButton from '../components/AppButton';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';

import DataManager from '../config/DataManager';

/**
 * 
 * @returns category data from DataManager
 */
const getCategories = () => {
    let commonData = DataManager.getInstance();
    let categories = commonData.getCategories();

    return categories;
}

function NewMemoryScreen({ navigation }) {
    // use state variables
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    // error checking
    const [titleError, setTitleError] = useState("");
    const [subTitleError, setSubTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [imageError, setImageError] = useState("");

    // data manager values
    const categoryList = getCategories();

    // image picker code
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return;
        }
        setImage({ path: pickerResult.uri });
    }

    // error handling
    const doErrorCheck = () => {
        setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
        setSubTitleError(subTitle.length > 0 ? "" : "Please set a valid subtitle");
        setCategoryError(category ? "" : "Please pick a category from the list");
        setImageError(image ? "" : "Please pick an image");
        return ((title.length > 0) && (subTitle.length > 0) && (category) && (image) ? true : false)
    }

    // adds memory to the DataManager array memories
    const addMemory = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        const memories = commonData.getMemories(user);
        const memoryID = commonData.getAllMemories().length + Math.floor(Math.random() * 1000);
        const newMemory = {
            userid: user,
            memoryid: memoryID,
            title: title,
            subtitle: subTitle,
            category: category.label,
            image: image.path
        };

        commonData.addMemory(newMemory);
    }

    // checks if the screen is in focus, if it is, reset the form values
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setTitle("");
            setSubTitle("");
            setCategory("");
            setImage("");
        });
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, []);


    return (
        <AppScreen style={styles.container}>
            {/* Title input */}
            <AppTextInput
                icon="camera"
                placeholder="Memory Title"
                value={title}
                size={"100%"}
                onChangeText={(inputText) => setTitle(inputText)}
            />
            {titleError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{titleError}</AppText> : <></>}

            {/* Subtitle input */}
            <AppTextInput
                icon="clipboard"
                placeholder="Description"
                value={subTitle}
                size={"100%"}
                onChangeText={(inputText) => setSubTitle(inputText)}
            />
            {subTitleError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{subTitleError}</AppText> : <></>}

            {/* Category Picker */}
            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                data={categoryList}
                icon="apps"
                placeholder="Categories" />
            {categoryError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{categoryError}</AppText> : <></>}

            {/* Upload image button */}
            <TouchableOpacity style={[styles.imageButton, { marginBottom: 10 }]} onPress={openImagePickerAsync}>
                <AppIcon name="camera" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} ></AppIcon>
            </TouchableOpacity>

            <View style={{ backgroundColor: AppColors.primaryColor, marginBottom: 20 }}>
                <Image source={{ uri: image.path }} style={{ height: 400, width: 400 }} />
            </View>
            {imageError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{imageError}</AppText> : <></>}

            {/* Add Memory Button */}
            <View style={styles.button}>

                <AppButton title="Add Memory" color="primaryColor" onPress={() => {
                    if (doErrorCheck()) {
                        addMemory();
                        navigation.navigate("Memories");

                    }
                }} />
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.secondaryColor,
        alignContent: 'center',
        justifyContent: 'flex-end',
        flexDirection: "column"
    },

    imageButton: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
    },
    button: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
    }
})

export default NewMemoryScreen;
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Formik } from 'formik';
// import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';
import AppIcon from '../components/AppIcon';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';


const categories = [
    { label: "L1", value: 1, icon: "airplane-takeoff", backgroundColor: "red" },
    { label: "L2", value: 2, icon: "ghost", backgroundColor: "blue" },
    { label: "L3", value: 3, icon: "flash", backgroundColor: "green" },
];

// const schema = Yup.object().shape(
//     {
//         title: Yup.string().required.
//     }
// )

function NewMemoryScreen({ navigation }) {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const [titleError, setTitleError] = useState("");
    const [subTitleError, setSubTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [imageError, setImageError] = useState("");

    let openImagePickerAsync = async () => { // remember to use this
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
        console.log(pickerResult);
    }


    const doErrorCheck = () => {
        setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
        setSubTitleError(subTitle.length > 0 ? "" : "Please set a valid subtitle");
        setCategoryError(category ? "" : "Please pick a category from the list");
        setImageError(image ? "" : "Please pick an image");
        return ((title.length > 0) && (subTitle.length > 0) && (category) && (image) ? true : false)
    }

    const addMemory = () => {
        let commonData = DataManager.getInstance();
        let user = commonData.getUserID();

        // console.log(user);

        const memories = commonData.getMemories(user);
        const memoryID = memories.length + 1; // TODO set as random number
        const newMemory = {
            userid: user,
            memoryid: memoryID,
            title: title,
            subtitle: subTitle,
            category: category.label,
            image: image.path
        };

        console.log(newMemory);
        commonData.addMemory(newMemory);
    }

    return (
        <AppScreen style={styles.container}>
            <AppTextInput
                icon="camera"
                placeholder="Memory Title"
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
            />

            {titleError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{titleError}</AppText> : <></>}

            <AppTextInput
                icon="calendar-month"
                placeholder="Date"
                value={subTitle}
                onChangeText={(inputText) => setSubTitle(inputText)}
            />
            {subTitleError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{subTitleError}</AppText> : <></>}

            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                data={categories}
                icon="apps"
                placeholder="Categories" />
            {categoryError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{categoryError}</AppText> : <></>}

            <TouchableOpacity style={styles.imageButton} onPress={openImagePickerAsync}>
                <AppIcon name="camera" size={80} iconColor="red" backgroundColor="blue" ></AppIcon>
                <Image source={{ uri: image.path }} style={{ height: 80, width: 80, marginLeft: 20, }} />
            </TouchableOpacity>

            {imageError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{imageError}</AppText> : <></>}

            <AppButton title="Add Memory" color="primaryColor" onPress={() => {
                if (doErrorCheck()) {
                    addMemory();
                    navigation.navigate("Memories");

                }
            }} />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.secondaryColor,
    },

    imageButton: {
        flexDirection: 'row',
        justifyContent: "center",
        alignContent: "center",
    }
})

export default NewMemoryScreen;
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
// import * as Yup from 'yup';

import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppTextInput from '../components/AppTextInput';
import AppColors from '../config/AppColors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import DataManager from '../config/DataManager';


/**
 * 1. Get the corresponding memory ID (through routing data)
 * 2. Use the memory ID to show the corresponding fields in the form
 *      should i show the existing fields???
 * 3. The only thing that user should be allowed to change is the:  
 *          title
 *          subtitle
 *          category
 * 4. After the user has made all the relevant changes, they are updated in the DataManager
 * 5. Then navigate back to the memories page.
 */

const categories = [
    { label: "L1", value: 1, icon: "airplane-takeoff", backgroundColor: "red" },
    { label: "L2", value: 2, icon: "ghost", backgroundColor: "blue" },
    { label: "L3", value: 3, icon: "flash", backgroundColor: "green" },
];

function UpdateMemory({ navigation, route }) {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [category, setCategory] = useState();

    const [titleError, setTitleError] = useState("");
    const [subTitleError, setSubTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    // const[imageError, setImageError]=useState("");

    const data = DataManager.getInstance();
    const memory = data.getMemory(route.params.paramMemoryID);

    console.log("updatememory[DATA]", memory);

    const doErrorCheck = () => {
        setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
        setSubTitleError(subTitle.length > 0 ? "" : "Please set a valid subtitle");
        setCategoryError(category ? "" : "Please pick a category from the list");
        // setImageError(image ? "" : "Please pick an image");
        return ((title.length > 0) && (subTitle.length > 0) && (category)
            // && (image) 
            ? true : false)
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
            // image: image.path
        };

        console.log(newMemory);
        commonData.addMemory(newMemory);
    }

    return (
        <AppScreen style={styles.container}>
            <AppTextInput
                icon="camera"
                placeholder="Memory Title" // TODO should be the current title
                value={title}
                onChangeText={(inputText) => setTitle(inputText)}
            />

            {titleError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{titleError}</AppText> : <></>}

            <AppTextInput
                icon="calendar-month"
                placeholder="Date" // TODO should be the current date
                value={subTitle}
                onChangeText={(inputText) => setSubTitle(inputText)}
            />
            {subTitleError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{subTitleError}</AppText> : <></>}

            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                data={categories}
                icon="apps"
                placeholder="Categories" // TODO should be the current category
            />
            {categoryError.length > 0 ? <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>{categoryError}</AppText> : <></>}

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
    }
})

export default UpdateMemory;
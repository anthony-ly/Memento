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

function NewMemoryScreen(props) {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [category, setCategory] = useState();

    const [titleError, setTitleError] = useState("");
    const [subTitleError, setSubTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    // const[imageError, setImageError]=useState("");

    const doErrorCheck = () => {
        setTitleError(title.length > 0 ? "" : "Please set a valid Book Title");
        setSubTitleError(subTitle.length > 0 ? "" : "Please set a valid subtitle");
        setCategoryError(category ? "" : "Please pick a category from the list");
        // setImageError(image ? "" : "Please pick an image");
        return ((title.length > 0) && (subTitle.length > 0) && (category)
            // && (image) 
            ? true : false)
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

            <AppButton title="Add Memory" color="primaryColor" onPress={() => doErrorCheck()} />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.secondaryColor,
    }
})

export default NewMemoryScreen;
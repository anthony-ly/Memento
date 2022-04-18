import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

const categories = [
    { label: "L1", value: 1, icon: "airplane-takeoff", backgroundColor: "red" },
    { label: "L2", value: 2, icon: "ghost", backgroundColor: "blue" },
    { label: "L3", value: 3, icon: "flash", backgroundColor: "green" },
];

function NewMemoryScreen(props) {
    const [category, setCategory] = useState();

    return (
        <AppScreen style={styles.container}>
            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                data={categories}
                icon="apps"
                placeholder="Categories" />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.secondaryColor,
    }
})

export default NewMemoryScreen;
import React from 'react';
import { StyleSheet } from 'react-native';
import AppPicker from '../components/AppPicker';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';


function NewMemoryScreen(props) {
    return (
        <AppScreen style={styles.container}>
            <AppPicker icon="apps" placeholder="Categories"></AppPicker>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.secondaryColor,
    }
})

export default NewMemoryScreen;
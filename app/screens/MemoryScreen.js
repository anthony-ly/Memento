import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

function MemoryScreen(props) {
    return (
        <AppScreen>
            <AppCard
                title="deez"
                subtitle="nuts" />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primaryColor,
        flex: 1,
    }
})
export default MemoryScreen;
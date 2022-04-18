import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from '../components/AppText'
import AppIcon from '../components/AppIcon'

function AppPickerItem({ onPress, label, icon, backgroundColor }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcon name={icon} iconColor="white" backgroundColor={backgroundColor} />
            <AppText style={{ marginLeft: 10 }}> {label}</AppText>
        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    }
})

export default AppPickerItem;
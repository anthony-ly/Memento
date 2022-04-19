import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppColors from '../config/AppColors';
import AppText from '../components/AppText'

function AppCard({ title, subtitle, image, onPress, onSwipeLeft }) {
    return (
        // for touchable highlight, make there be a border radius
        <Swipeable renderRightActions={onSwipeLeft}>
            <TouchableHighlight onPress={onPress} underlayColor={AppColors.primaryColor}>
                <View style={styles.container}>
                    <Image source={image} style={styles.image} />
                    <View style={styles.text}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subtitle}>{subtitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight >
        </Swipeable>
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
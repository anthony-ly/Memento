import React from 'react';
import { View, Image, Text, StyleSheet, TouchableHighlight } from 'react-native';
import AppColors from '../config/AppColors';
import AppText from '../components/AppText'

function AppCard({ title, subtitle, image, onPress }) {
    return (
        // for touchable highlight, make there be a border radius
        <TouchableHighlight onPress={() => console.log("ok")} underlayColor={AppColors.primaryColor}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <View style={styles.text}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subtitle}>{subtitle}</AppText>
                </View>
            </View>
        </TouchableHighlight >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.secondaryColor,
        borderRadius: 20,
        overflow: 'hidden',
    },
    text: {
        paddingLeft: 20,
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
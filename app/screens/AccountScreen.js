import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';


function AccountScreen({ navigation, route }) {
    return (
        <AppScreen style={styles.container}>

            {/* <AppButton title="logout" onPress={() => navigation.navigate('Welcome')}></AppButton> */}
            <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Welcome')}>
                <AppIcon name="logout" iconColor={AppColors.primaryColor} backgroundColor={AppColors.otherColor} />
            </TouchableOpacity>
            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="camera"
                    size={60}
                    color={AppColors.otherColor} />
                <AppText>Welcome back, {route.params.paramName}!</AppText>
            </View>
            <View style={styles.profileContainer}>
                {/* <AppListItem image={route.params.paramImage} title={route.params.paramName} subtitle={route.params.paramEmail}/> */}
                <AppListItem image={require("../assets/pfp.jpg")} title={route.params.paramName} subtitle={route.params.paramEmail} />
            </View>
            {/* maybe put an image here?? */}
        </AppScreen >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primaryColor,
        marginTop: 0,
    },
    welcomeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    profileContainer: {
        marginTop: 50,
        height: 90,
        backgroundColor: AppColors.secondaryColor,
        justifyContent: "center",
    },
    linksContainer: {
        marginVertical: 75,
        backgroundColor: AppColors.otherColorLite,
        height: 150,
        justifyContent: "space-around",
        paddingLeft: 10,
    },
    logout: {
        flexDirection: 'row-reverse'
    }
})
export default AccountScreen;
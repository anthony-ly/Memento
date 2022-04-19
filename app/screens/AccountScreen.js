import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppListItem from '../components/AppListItem';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';


function AccountScreen({ navigation, route }) {
    return (
        <AppScreen style={styles.container}>

            <View style={styles.welcomeContainer}>
                <MaterialCommunityIcons
                    name="camera"
                    size={60}
                    color={AppColors.otherColor} />
                <AppText>Welcome back, {route.params.paramName}!</AppText>
            </View>
            <View style={styles.profileContainer}>
                {/* <AppListItem image={route.params.paramImage} title={route.params.paramName} subtitle={route.params.paramEmail}/> */}
                <AppListItem title={route.params.paramName} subtitle={route.params.paramEmail} />
            </View>
            {/* <View style={styles.linksContainer}>  */}
            {/* <AppListItem title="My Books" IconComponent={<AppIcon name="book-open-variant" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.secondaryColor} />} onPress={() => navigation.navigate("Books")} /> */}
            {/* <AppListItem title="My Authors" IconComponent={<AppIcon name="account-heart" size={50} iconColor={AppColors.otherColor} backgroundColor={AppColors.secondaryColor} />} onPress={() => navigation.navigate("MyAuthors")} /> */}
            {/* </View> */}
        </AppScreen>
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
    }
})
export default AccountScreen;
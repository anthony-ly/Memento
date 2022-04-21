import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MemoryScreen from '../screens/MemoryScreen';
import NewMemoryScreen from '../screens/NewMemoryScreen';
import AppColors from '../config/AppColors';
import AccountScreen from '../screens/AccountScreen';
import AppIcon from '../components/AppIcon';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{ "tabBarActiveTintColor": "#202224", "tabBarActiveBackgroundColor": "#f7efe9", "tabBarStyle": [{ "display": "flex" }, null] }}>
        <AppTab.Screen name="Account" component={AccountScreen} options={{ tabBarIcon: () => <AppIcon size={30} name="home" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} /> }} />
        <AppTab.Screen name="Add Memory" component={NewMemoryScreen} options={{ tabBarIcon: () => <AppIcon size={30} name="plus-circle" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} /> }} />
        <AppTab.Screen name="Memories" component={MemoryScreen} options={{ tabBarIcon: () => <AppIcon size={30} name="camera" iconColor={AppColors.otherColor} backgroundColor={AppColors.primaryColor} /> }} />
    </AppTab.Navigator >
)

export default TabNavigator;
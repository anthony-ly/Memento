import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MemoryScreen from '../screens/MemoryScreen';
import NewMemoryScreen from '../screens/NewMemoryScreen';
import AppColors from '../config/AppColors';
import AccountScreen from '../screens/AccountScreen';

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
    <AppTab.Navigator screenOptions={{
        "tabBarActiveTintColor": "#202224",
        "tabBarActiveBackgroundColor": "#f7efe9",
        "tabBarStyle": [
            {
                "display": "flex"
            },
            null
        ]
    }}>
        <AppTab.Screen name="Account" component={AccountScreen} />
        <AppTab.Screen name="Add Memory" component={NewMemoryScreen} />
        <AppTab.Screen name="Memories" component={MemoryScreen} />


    </AppTab.Navigator >
)

export default TabNavigator;
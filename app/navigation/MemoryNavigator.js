import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();


const MemoryNavigator = () => (
    <AppStack.Navigator mode="modal">
        <AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <AppStack.Screen name="Books" component={MyBooksScreen} />
        <AppStack.Screen name="MyAuthors" component={MyAuthorsScreen} />
    </AppStack.Navigator>
)

export default MemoryNavigator;
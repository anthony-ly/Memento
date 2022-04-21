import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import TabNavigator from './app/navigation/TabNavigator';
import MemoryScreen from './app/screens/MemoryScreen';
import NewMemoryScreen from './app/screens/NewMemoryScreen';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  return (

    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    // <AccountScreen></AccountScreen>
    // <MemoryScreen></MemoryScreen>
    // <NewMemoryScreen>
    // </NewMemoryScreen>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: AppColors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

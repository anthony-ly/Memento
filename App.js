import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import MemoryScreen from './app/screens/MemoryScreen';


export default function App() {
  return (

    // <NavigationContainer>
    //   <AuthNavigator />
    // </NavigationContainer>
    <MemoryScreen></MemoryScreen>

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

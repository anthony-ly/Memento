import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppButton from './app/components/AppButton';
import AppColors from './app/config/AppColors';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AuthNavigator from './app/navigation/AuthNavigator';


export default function App() {
  return (

    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
    // <LoginScreen />
    // <RegisterScreen />

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

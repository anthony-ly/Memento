import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';

import AppColors from './app/config/AppColors';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
  return (

    <WelcomeScreen />
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

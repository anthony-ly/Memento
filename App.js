import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';

import AppScreen from './app/components/AppScreen';
import AppText from './app/components/AppText';
import AppColors from './app/config/AppColors';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (

    // <WelcomeScreen />
    <LoginScreen />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

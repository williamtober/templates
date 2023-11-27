import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeWindStyleSheet } from 'nativewind';
// defined router
import Router from './router';

// set the output to native for nativewind
NativeWindStyleSheet.setOutput({
  default: 'native'
});

export default function App() {
  return (
    <NavigationContainer>
      {/* ROUTER HERE */}
      <Router />
    </NavigationContainer>
  );
}


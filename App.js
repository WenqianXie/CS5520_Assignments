import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Starting from './screens/Starting';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';


export default function App() {
  const[currentScreen, setCurrentScreen] = useState("Starting");
  return (
    <View style = {styles.container}>
    <Starting/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

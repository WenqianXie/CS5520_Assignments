import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Starting from './screens/Starting';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { validateName, validateEmail, validatePhone } from './Utils/validation';
import Confirm from './screens/Confirm';
import { colors } from './Utils/styles';


export default function App() {
  const[currentScreen, setCurrentScreen] = useState("Starting");
  // const[userData, setUserData] = useState("", "", "");

  const startHandler = (name, email, phone) =>{
    if (validateName(name) && validateEmail(email) && validatePhone(phone)){
      // setUserData( { name, email, phone } );
      setCurrentScreen("Confirm")
    } else {console.log("Validation failed.")}
  };
  return (
    <View style = {styles.container}>
      {/* <LinearGradient
        colors={['#0000FF', '#800080']} // Blue to Purple gradient
        style={styles.gradient}
      > */}
      {currentScreen === 'Starting' && <Starting onStart={startHandler} />}
      {currentScreen === 'Confirm' && <Confirm />} 
      
     {/* </LinearGradient> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gradient: {
    flex: 1,
  },
});

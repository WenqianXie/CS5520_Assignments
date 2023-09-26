import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Starting from './screens/Starting';
import { useState } from 'react';
import { validateName, validateEmail, validatePhone } from './Utils/validation';
import Confirm from './screens/Confirm';
import { colors } from './Utils/styles';
import Header from './components/Header';

export default function App() {
  const [userData, setUserInfo] = useState({
    userName: "abc",
    userEmail: "123@123.com",
    userPhone: 1234567890,
  });

  const [modalVisible, setModalVisible] = useState(false);

  function makeModalVisible(){
    setModalVisible(true);
  }

  function makeModalInvisible(){
    setModalVisible(false);
  }

  function start(){
    setModalVisible(true);
  }

  return (
    <View style = {styles.container}>
      <Confirm/>
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

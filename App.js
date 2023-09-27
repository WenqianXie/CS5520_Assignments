import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Starting from './screens/Starting';
import { useState } from 'react';
import { validateName, validateEmail, validatePhone } from './Utils/validation';
import Confirm from './screens/Confirm';
import { colors } from './Utils/styles';
import Header from './components/Header';
import Game from './screens/Game';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  // const [userData, setUserInfo] = useState({
  //   userName: "",
  //   userEmail: "",
  //   userPhone: "",
  // });

  const [userName, setUserName] = useState(""); // User enter name
  const [userEmail, setUserEmail] = useState(""); // User enter email
  const [userPhone, setUserPhone] = useState(""); // User enter phone
  
  const [currentScreen, setCurrentScreen] = useState("start");
  const [modalVisible, setModalVisible] = useState(false);

  function makeModalVisible(){
    setModalVisible(true);
  }

  function makeModalInvisible(){
    setModalVisible(false);
  }

  function start(){
    // setUserInfo({
    //   userName: {userName},
    //   userEmail: {userEmail},
    //   userPhone: {userPhone},
    // });
    setModalVisible(true);
    setCurrentScreen("confirm");
  }

  function reset(){
    // setUserInfo({
    //   userName: "",
    //   userEmail: "",
    //   userPhone: "",
    // });
    setModalVisible(false);
  }

  function continueToGame(){
    setCurrentScreen("game");
  }

  return (
    <LinearGradient
        colors={['#ADD8E6', '#D02090']} // Blue to Purple gradient
        style={styles.gradient}>
    <View style={[styles.container, { display: currentScreen === "start" ? "flex" : "none" }]}>
      <Starting
      start = {start}/>
    </View>

    <View style={[styles.container, { display: currentScreen === "confirm" ? "flex" : "none" }]}>
      <Confirm
      userName={userName}
      userEmail={userEmail}
      userPhone={userPhone}
      modalVisible = {modalVisible}
      makeModalInvisible = {makeModalInvisible}
      continueToGame={continueToGame}/>
    </View>
     
    <View style={[styles.container, { display: currentScreen === "game" ? "flex" : "none" }]}>
      <Game
      reset = {reset}/>
    </View>
  </LinearGradient>
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

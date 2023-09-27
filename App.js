import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Starting from "./screens/Starting";
import { useState } from "react";
import { validateName, validateEmail, validatePhone } from "./Utils/validation";
import Confirm from "./screens/Confirm";
import { colors } from "./Utils/styles";
import Header from "./components/Header";
import Game from "./screens/Game";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userData, setUserInfo] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const [currentScreen, setCurrentScreen] = useState("start");
  const [modalVisible, setModalVisible] = useState(false);

  function makeModalVisible() {
    setModalVisible(true);
  }

  function makeModalInvisible() {
    setModalVisible(false);
  }

  function start({ userName, userEmail, userPhone }) {
    setUserInfo({
      userName,
      userEmail,
      userPhone,
    });
    setModalVisible(true);
    setCurrentScreen("confirm");
  }

  function reset() {
    setModalVisible(false);
    setUserInfo("", "", "");
  }

  function continueToGame() {
    setCurrentScreen("game");
  }

  function goBackToStart() {
    setCurrentScreen("start");
  }

  function logOutToStart() {
    setCurrentScreen("start");
  }

  return (
    <LinearGradient
      colors={["#add8e6", "#d8bfd8"]} // Blue to Purple gradient
      style={styles.gradient}
    >
      <View
        style={[
          styles.container,
          { display: currentScreen === "start" ? "flex" : "none" },
        ]}
      >
        <Starting start={start} />
      </View>

      <View
        style={[
          styles.container,
          { display: currentScreen === "confirm" ? "flex" : "none" },
        ]}
      >
        <Confirm
          userData={userData}
          modalVisible={modalVisible}
          makeModalInvisible={makeModalInvisible}
          continueToGame={continueToGame}
          goBackToStart={goBackToStart}
        />
      </View>

      <View
        style={[
          styles.gameContainer,
          { display: currentScreen === "game" ? "flex" : "none" },
        ]}
      >
        <Game reset={reset} logOutToStart={logOutToStart} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  gameContainer: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },
});

import { View } from "react-native";
import Starting from "./screens/Starting";
import { useState } from "react";
import Confirm from "./screens/Confirm";
import { colors } from "./Utils/Helper";
import Game from "./screens/Game";
import { LinearGradient } from "expo-linear-gradient";
import { appStyles } from "./Utils/Helper";
//this is app.js, main entry point

export default function App() {
  const [userData, setUserInfo] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
  }); // initialize everything to empty

  const [currentScreen, setCurrentScreen] = useState("start"); // initialize the screen to start
  const [modalVisible, setModalVisible] = useState(false); // hide confirm screen

  function makeModalInvisible() {
    setModalVisible(false);
  } // hide modal

  function start({ userName, userEmail, userPhone }) {
    setUserInfo({
      userName,
      userEmail,
      userPhone,
    });
    setModalVisible(true);
    setCurrentScreen("confirm");
  } // this is the function to pass in starting screen, get data passed. once start is hit, switch screen to confirm

  function reset() {
    setModalVisible(false);
  } // hide modal

  function continueToGame() {
    setCurrentScreen("game");
  } // swtich to game screen

  function goBackToStart() {
    setCurrentScreen("start");
  } // back to the starting screen

  function logOutToStart() {
    setCurrentScreen("start");
    reset(); // back to starting screen and hide modal (confirm)
  }

  return (
    <LinearGradient
      colors={[colors.lightYellow, colors.lightBlue]} // Yellow to Blue gradient
      style={appStyles.gradient}
    >
      <View
        style={[
          appStyles.container,
          { display: currentScreen === "start" ? "flex" : "none" },
          // conditional rendering, if the current screen is start, show the screen, otherwise hide it
        ]}
      >
        <Starting start={start} />
      </View>

      <View
        style={[
          appStyles.container,
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
        {/* pass functions to confirm */}
      </View>

      <View
        style={[
          appStyles.gameContainer,
          { display: currentScreen === "game" ? "flex" : "none" },
        ]}
      >
        <Game logOutToStart={logOutToStart} />
      </View>
    </LinearGradient>
  );
}

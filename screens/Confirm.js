import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";
import { confirmStyles } from "../Utils/Helper";

export default function Confirm({
  userData,
  modalVisible,
  makeModalInvisible,
  continueToGame,
  goBackToStart,
}) {
  function goBackHandler() {
    makeModalInvisible();
    goBackToStart();
  } // once the user clicked on go back, the confirm modal is not visible, the current screen is set to Start

  function continueHandler() {
    makeModalInvisible();
    continueToGame();
  } // once the suer clicked on continue, the confirm modal is not visible, the current screen is set to Game

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={confirmStyles.centeredView}>
        <View style={confirmStyles.modalView}>
          <Text style={confirmStyles.textStyle}>
            Hello {userData.userName}!
          </Text>
          <Text style={confirmStyles.textStyle}>
            Please confirm the following information is correct by pressing the
            continue button
          </Text>
          <Text style={confirmStyles.textInfoStyle}>{userData.userEmail}</Text>
          <Text style={confirmStyles.textInfoStyle}>{userData.userPhone}</Text>
          <View style={confirmStyles.modalButton}>
            <View style={confirmStyles.goBack}>
              <Button title="Go Back" onPress={goBackHandler} color="red" />
            </View>
            <View style={confirmStyles.continue}>
              <Button title="Continue" onPress={continueHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

// const styles = StyleSheet.create({
//   buttonContainer: {
//     display: "flex",
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },
//   centeredView: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     flex: 1,
//   },
//   modalView: {
//     display: "flex",
//     flex: 1,
//     margin: 20,
//     backgroundColor: "#D3D3D3",
//     borderRadius: 20,
//     padding: 15,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   textStyle: {
//     textAlign: "left",
//     fontSize: 24,
//     color: "blue",
//   },
//   textInfoStyle: {
//     textAlign: "left",
//     fontSize: 24,
//     color: "#6B0F4D",
//     fontWeight: "bold",
//   },
//   modalButton: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//   },
//   goBack: {
//     color: "#ED33FF",
//     fontWeight: "bold",
//     fontSize: 24,
//     marginRight: 30,
//   },
//   continue: { color: "#337EFF", fontWeight: "bold", fontSize: 24 },
// });

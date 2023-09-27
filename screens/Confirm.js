import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";

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
  }

  function continueHandler() {
    makeModalInvisible();
    continueToGame();
  }
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>Hello {userData.userName}!</Text>
          <Text style={styles.textStyle}>
            Please confirm the following information is correct by pressing the
            continue button
          </Text>
          <Text style={styles.textInfoStyle}>{userData.userEmail}</Text>
          <Text style={styles.textInfoStyle}>{userData.userPhone}</Text>
          <View style={styles.modalButton}>
            <View style={styles.goBack}>
              <Button title="Go Back" onPress={goBackHandler} color="red" />
            </View>
            <View style={styles.continue}>
              <Button title="Continue" onPress={continueHandler} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  centeredView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  modalView: {
    display: "flex",
    flex: 1,
    margin: 20,
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    textAlign: "left",
    fontSize: 24,
    color: "blue",
  },
  textInfoStyle: {
    textAlign: "left",
    fontSize: 24,
    color: "#6B0F4D",
    fontWeight: "bold",
  },
  modalButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  goBack: {
    color: "#ED33FF",
    fontWeight: "bold",
    fontSize: 24,
    marginRight: 30,
  },
  continue: { color: "#337EFF", fontWeight: "bold", fontSize: 24 },
});

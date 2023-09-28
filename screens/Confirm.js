import { View, Text, Modal, Button } from "react-native";
import React from "react";
import { confirmStyles } from "../Utils/Helper";
// this is a modal that shows the user data, user can choose to go back to sign up or continue to game

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

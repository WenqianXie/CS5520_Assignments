import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import Header from "../components/Header";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../addition/Validation";
import { startingStyles, colors } from "../addition/Helper";
// this is the starting screen for the user to input the name, email and phone, validate them and show error messages

export default function Starting({ start }) {
  const [userName, setUserName] = useState(""); // User enter name
  const [userEmail, setUserEmail] = useState(""); // User enter email
  const [userPhone, setUserPhone] = useState(""); // User enter phone

  const [isChecked, setIsChecked] = useState(false); // checkbox status, default set to not checked

  const [nameError, setNameError] = useState(""); // nameError message
  const [emailError, setEmailError] = useState(""); // emailError message
  const [phoneError, setPhoneError] = useState(""); //phoneError message

  const startHandler = () => {
    setNameError(""); // before validation, clear error messages
    setEmailError("");
    setPhoneError("");
    let isValid = true;
    if (!validateName(userName)) {
      setNameError("Please enter a valid name.");
      isValid = false;
    }
    if (!validateEmail(userEmail)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    }
    if (!validatePhone(userPhone)) {
      setPhoneError("Please enter a valid phone.");
      isValid = false;
    } // if the input fields are not correct, set error messages

    if (!isValid) {
      return;
    } // if the validation did not pass, return

    start({ userName, userEmail, userPhone }); // validation passed, pass userdata to the App.js

    setUserName(""); // after userdata is passed, set everything to initial state, so after "logout" everything is cleared
    setUserEmail("");
    setUserPhone("");
    setIsChecked(false);
  };

  const resetHandler = () => {
    setUserName("");
    setUserEmail("");
    setUserPhone("");
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setIsChecked(false);
  }; // Once reset button is clicked, reset everything to the initial state

  return (
    <View>
      <Header />
      <View style={startingStyles.container}>
        <Text style={startingStyles.label}>Name</Text>
        <TextInput
          style={startingStyles.input}
          value={userName}
          onChangeText={setUserName}
        />
        {nameError && <Text>{nameError}</Text>}
        {/* conditional rendering. if nameError is not empty, it will be rendered */}

        <Text style={startingStyles.label}>Email</Text>
        <TextInput
          style={startingStyles.input}
          value={userEmail}
          onChangeText={setUserEmail}
          keyboardType="email-address"
        />
        {emailError && <Text>{emailError}</Text>}

        <Text style={startingStyles.label}>Phone</Text>
        <TextInput
          style={startingStyles.input}
          value={userPhone}
          onChangeText={setUserPhone}
          keyboardType="numeric"
        />
        {phoneError && <Text>{phoneError}</Text>}

        <View style={startingStyles.checkboxContainer}>
          <Checkbox value={isChecked} onValueChange={setIsChecked} />
          <Text
            style={[
              startingStyles.checkboxText,
              {
                margin: 10, // make a little space for the checkbox and text
              },
            ]}
          >
            I am not a robot
          </Text>
        </View>

        <View style={startingStyles.buttonContainer}>
          <View style={startingStyles.reset}>
            <Button title="Reset" onPress={resetHandler} color="red" />
          </View>
          <View style={startingStyles.start}>
            <Button
              title="Start"
              onPress={startHandler}
              disabled={!isChecked} // if the checkbox is not checked, the start button is disabled
              color={isChecked ? colors.blue : colors.white} // if the checkbox is not checked, the start button is white, otherwise it is blue
            />
          </View>
        </View>
      </View>
    </View>
  );
}

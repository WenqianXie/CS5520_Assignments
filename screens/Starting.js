import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import { useState } from 'react'
import Checkbox from 'expo-checkbox';
import Header from '../components/Header';
import { validateName, validateEmail, validatePhone } from '../Utils/validation';

export default function Starting ({userName, setUserName, userEmail, setUserEmail, userPhone,setUserPhone, start}) {
  // const [userName, setUserName] = useState(""); // User enter name
  // const [userEmail, setUserEmail] = useState(""); // User enter email
  // const [userPhone, setUserPhone] = useState(""); // User enter phone

  const [isChecked, setIsChecked] = useState(false); // checkbox status, default set to not checked

  const [nameError, setNameError] = useState(""); // nameError message
  const [emailError, setEmailError] = useState(""); // emailError message
  const [phoneError, setPhoneError] = useState(""); //phoneError message

  const startHandler = (userName, userEmail, userPhone) => {
    if (!validateName(userName)){
        setNameError("Please enter a valid name.")
        return false;
    }
    if (!validateEmail(userEmail)){
        setEmailError("Please enter a valid email.")
        return false;
    }
    if (!validatePhone(userPhone)){
        setPhoneError("Please enter a valid phone.")
        return false;
    }
    start();
    // setNameError("");
    // setEmailError("");
    // setPhoneError("");
    setUserName(userName);
    setUserEmail(userEmail);
    setUserPhone(userPhone);
  }; // if the input fields are not correct, set error messages

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
      <Header/>
      <View style = {styles.container}>
        <Text style = {styles.label}>Name</Text>
        <TextInput
            style = {styles.input}
            value = {userName}
            onChangeText = {setUserName}/>
            {nameError && <Text>{nameError}</Text>}
           
        <Text style = {styles.label}>Email</Text>
        <TextInput
            style = {styles.input}
            value = {userEmail}
            onChangeText={setUserEmail}
            keyboardType="email-address"/>
            {emailError && <Text>{emailError}</Text>}

        <Text style = {styles.label}>Phone</Text>
        <TextInput
            style = {styles.input}
            value = {userPhone}
            onChangeText={setUserPhone}
            keyboardType="numeric"/>
            {phoneError && <Text>{phoneError}</Text>}
        
          <View style={styles.checkboxContainer}>
            <Checkbox 
            value={isChecked}
            onValueChange={setIsChecked}/>
            <Text style={styles.label}>I am not a robot</Text>
            </View>
            
          <View style = {styles.buttonContainer}>
            <View style={styles.reset}>
            <Button
              title = "Reset"
              onPress={resetHandler}/>
            </View>
            <View style={styles.start}>
              <Button  
              title = "Start"
              onPress={startHandler}
              disabled = {!isChecked}/>
              </View>
            </View>
          </View> 
        </View>
  );}


const styles = StyleSheet.create({
    label: {
      marginTop: 20,
      color: "purple",
      fontSize: 25,
      marginVertical: 8,
    },

    input: {
      color: "#6B0F4D",
      borderBottomColor: "#6B0F4D",
      borderBottomWidth: 3,
      width: 300,
      // alignSelf: 'center',
      fontSize: 20,
      textAlign: "center",
      paddingBottom: 5,
      fontWeight: 'bold',
    },

    buttonContainer: {
      width: "60%",
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 100,
    },

    container: {
      width: '100%', // Set the width to take 80% of the screen width
      height: 500, 
      backgroundColor: '#CCCCCC', // Set the background color to grey
      padding: 20, // Add some padding to the content inside the container
      // alignItems: 'flex-start', // Align content to the left
      // justifyContent: 'flex-start',
      marginTop: 20,
      shadowColor: "#000000",
      shadowOffset: { width : 0, height : 2},
      shadowRadius: 6,
      borderRadius: 15,
    },

    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },

    reset: {
      color: "#ED33FF",
      fontWeight: "bold",
      fontSize: 24,
    },

    start: {
      color: "#337EFF",
      fontWeight: "bold",
      fontSize: 24,
    },

});

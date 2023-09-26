import { View, Text, TextInput, StyleSheet, Checkbox, Button} from 'react-native'
import { useState } from 'react'
import Header from '../components/Header';
import { validateName, validateEmail, validatePhone } from '../Utils/validation';

export default function Starting () {
  const [userName, setUserName] = useState(""); // User enter name
  const [userEmail, setUserEmail] = useState(""); // User enter email
  const [userPhone, setUserPhone] = useState(""); // User enter phone

  const [isChecked, setIsChecked] = useState(false); // checkbox status, default set to not checked

  const [nameError, setNameError] = useState(""); // nameError message
  const [emailError, setEmailError] = useState(""); // emailError message
  const [phoneError, setPhoneError] = useState(""); //phoneError message

  // const validateName = (name) =>{
  //   if (name.length < 2 || !isNaN(name)){
  //       return false;
  //   }
  //   return true;
  // } // validate if a user name is valid (length must be more than 1 and must not be number)

  // const validateEmail = (email) => {
  //   const emailPattern = /\S+@\S+\.\S+/;
  //   return emailPattern.test(email);
  // } // validate if a user email is valid, using regular expression 

  // const validatePhone = (phone) => {
  //   if (phone.length !== 10 || isNaN(phone)){
  //       return false;
  //   }
  //   return true;
  // }; // validate if a phone number is valid (length must be 10 and must be numbers)

  const startHandler = () => {
    const isValid = true;
    if (!validateName(userName)){
        isValid = false;
        setNameError("Please enter a valid name.")
    }
    if (!validateEmail(userEmail)){
        isValid = false;
        setEmailError("Please enter a valid email.")
    }
    if (!validatePhone(userPhone)){
        isValid = false;
        setPhoneError("Please enter a valid phone.")
    }
    props.onStart(userName, userEmail, userPhone);
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
        
            {/* <Checkbox
            value={isChecked}
            onValueChange={setIsChecked}/>
            <Text style={styles.label}>I am not a robot</Text> */}
          <View style = {styles.buttonContainer}>
            <Button 
              title = "Reset"
              onPress={resetHandler}/>

              <Button 
              title = "Start"
              onPress={startHandler}/>
              {/* disabled = {!isChecked}  */}
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
      width: '80%', // Set the width to take 80% of the screen width
      height: 500, 
      backgroundColor: '#CCCCCC', // Set the background color to grey
      padding: 20, // Add some padding to the content inside the container
      alignItems: 'flex-start', // Align content to the left
      justifyContent: 'flex-start',
      marginTop: 20,
    }

});

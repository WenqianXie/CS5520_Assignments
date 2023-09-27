import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import React, { useState } from 'react'

export default function Game({reset}) {

  function getRandomInt(min, max){
     min = Math.ceil(min);
     max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;}

  const [enteredNumber, setEnteredNumber] = useState("");
  const [guessNumber, setGuessNumber] = useState(getRandomInt(10, 20));
  console.log(guessNumber);
  const [guessCount, setGuessCount] = useState(0);
  const [stage, setStage] = useState("guess");

  const resetHandler = () => {
    setEnteredNumber("");
  }

  const logOutHandler = () => {
    setEnteredNumber("");
    reset();
  }

  const confirmHandler = () => {
    const userGuess = parseInt(enteredNumber);
    if (userGuess === guessNumber){
        setStage("sucess");
    }else {
      setGuessCount(guessCount + 1);
      setStage("failure");
    }
  }

  const newGameHandler = () => {
    setGuessNumber(getRandomInt(10, 20));
    setEnteredNumber("");
    setGuessCount(0);
    setStage("guess");
  }

  const tryAgainHandler = () => {
    setStage("guess");
    setEnteredNumber("");
  }


  return (
    <View>
      <Button 
      style = {styles.buttonContainer}
      title = "Log Out" 
      onPress={logOutHandler}/>
    <View style={[styles.container, { display: stage === "guess" ? "flex" : "none" }]}>
      <Text style={styles.label}>Guess A Number Between 10 & 20</Text>
      <View style={styles.userContainer}>
        <Text style={styles.enterNumber}>Enter a Number</Text>
        <TextInput
          style={styles.input}
          value={enteredNumber}
          onChangeText={(text) => setEnteredNumber(text)}
        />
        <View style={styles.buttonContainer}>
          <Button 
          title = "Reset" 
          onPress={resetHandler}/>
          <Button 
          title = "Confirm" 
          onPress={confirmHandler}/>
        </View>
      </View>
    </View>
          
          <View style={[styles.container, { display: stage === "sucess" ? "flex" : "none" }]}>
          <Text style = {styles.label}>You guess correct!</Text>
          <Text style = {styles.label}>Number of guesses: {guessCount + 1}</Text>
          <Image
            source={{
              uri: `https://picsum.photos/id/${guessNumber}/100/100`,}}
            style={styles.image}></Image>
            <View style={styles.buttonContainer}>
                <Button 
                title = "New Game" 
                onPress={newGameHandler}/>
              </View>
          </View>


          <View style={[styles.container, { display: stage === "failure" ? "flex" : "none" }]}>
            <View style = {styles.userContainer}>
              <Text style = {styles.label}>You didn't guess correct!</Text>
              <Image source={require("../assets/wrongGuess.jpg")} style={styles.image} />
              <View style={styles.buttonContainer}>
                <Button 
                title = "Try again" 
                onPress={tryAgainHandler}/>
              </View>
            </View>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      padding: 20, // Add some padding to the content inside the container
    },
    userContainer: {
      width: "100%", // Set the width to take 80% of the screen width
      height: 300,
      backgroundColor: "#CCCCCC", // Set the background color to grey
      marginTop: 20,
      padding: 20, // Add some padding to the content inside the container
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    enterNumber: {
      marginTop: 20,
      color: "blue",
      fontSize: 24,
      marginVertical: 8,
      fontWeight: "bold",
      textAlign: "center",
    },
    label: {
      marginTop: 20,
      color: "blue",
      fontSize: 24,
      marginVertical: 8,
      fontWeight: "bold",
      textAlign: "center",
    },
    desc: {
      color: "purple",
      marginLeft: 12,
    },
    input: {
      color: "#6B0F4D",
      borderBottomColor: "#6B0F4D",
      borderBottomWidth: 5,
      width: 50,
      alignSelf: "center",
      fontSize: 20,
      textAlign: "center",
      paddingBottom: 10,
      fontWeight: "bold",
      marginTop: 20,
    },
    buttonContainer: {
    //   display: "flex",
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
    desc: {
      color: "purple",
      marginLeft: 12,
    },
    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 20,
    },
    error: {
      color: "#7F848E",
      fontWeight: "bold",
      fontSize: 18,
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
    image: {
      width: 100,
      height: 100,
      marginTop: 30,
      justifyContent: "center",
    },
    logOutContainer:{
      flex: 1,
      flexDirection: "row-reserve",
      alignItems: 'flex-end',
      justifyContent: "space-between",
      padding: 16,
    }
  });
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { gameStyles } from "../Utils/Helper";
// this the game screen that user can input their guess number, and will show result to the user

export default function Game({ logOutToStart }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } // function to generate a random integer between 10 and 20

  const [enteredNumber, setEnteredNumber] = useState("");
  const [guessNumber, setGuessNumber] = useState(getRandomInt(10, 20));
  //console.log(guessNumber); //this is to show in the console what the guess number is
  const [guessCount, setGuessCount] = useState(0);
  const [stage, setStage] = useState("guess");

  const resetHandler = () => {
    setEnteredNumber("");
  }; // reset is clicked to erase the user input

  const logOutHandler = () => {
    logOutToStart();
    newGameHandler();
  }; // once user hit log out, the screen will switch to "start" and new game data will be created

  const confirmHandler = () => {
    const userGuess = parseInt(enteredNumber);
    if (userGuess === guessNumber) {
      setStage("sucess");
    } else {
      setGuessCount(guessCount + 1);
      setStage("failure");
    } // compare user input number and guess number, if equal switch to sucess stage, otherwise failure stage, and guess count should + 1
  };

  const newGameHandler = () => {
    setGuessNumber(getRandomInt(10, 20));
    setEnteredNumber("");
    setGuessCount(0);
    setStage("guess");
  }; // new game generates a new random integer between 10 and 20, set the user input to initial state, guess count to 0, and switch stage to "guess"

  const tryAgainHandler = () => {
    setStage("guess");
    setEnteredNumber("");
  }; // try again will erase the user input and switch to guess stage, but the guess number will not be changed

  return (
    <SafeAreaView>
      <View style={gameStyles.logOutContainer}>
        <Button title="Log Out" onPress={logOutHandler} />
      </View>
      <View
        style={[
          gameStyles.container,
          { display: stage === "guess" ? "flex" : "none" },
          // conditional rendering, if the stage is guess, show this screen, otherwise be invisible to user
        ]}
      >
        <Text style={gameStyles.label}>Guess A Number Between 10 & 20</Text>
        <View style={gameStyles.userContainer}>
          <Text style={gameStyles.enterNumber}>Enter a Number</Text>
          <TextInput
            style={gameStyles.input}
            value={enteredNumber}
            onChangeText={(text) => setEnteredNumber(text)} // set user input to enered number
          />
          <View style={gameStyles.buttonContainer}>
            <Button title="Reset" onPress={resetHandler} color="red" />
            <Button title="Confirm" onPress={confirmHandler} />
          </View>
        </View>
      </View>

      <View
        style={[
          gameStyles.container,
          { display: stage === "sucess" ? "flex" : "none" },
        ]}
      >
        <View style={gameStyles.userContainer}>
          <Text style={gameStyles.label}>You guessed correct!</Text>
          <Text style={gameStyles.label}>
            Number of guesses: {guessCount + 1}
          </Text>
          <Image
            source={{
              uri: `https://picsum.photos/id/${guessNumber}/100/100`,
              // replace 14 with guess number, so different guess number will show different image
            }}
            style={gameStyles.image}
          ></Image>
          <View style={gameStyles.buttonContainer}>
            <Button title="New Game" onPress={newGameHandler} />
          </View>
        </View>
      </View>

      <View
        style={[
          gameStyles.container,
          { display: stage === "failure" ? "flex" : "none" },
        ]}
      >
        <View style={gameStyles.userContainer}>
          <Text style={gameStyles.label}>You didn't guess correct!</Text>
          <Image
            source={require("../assets/wrongGuess.jpg")} // use require to get image, it is stored in assets
            style={gameStyles.image}
          />
          <View style={gameStyles.buttonContainer}>
            <Button title="Try again" onPress={tryAgainHandler} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

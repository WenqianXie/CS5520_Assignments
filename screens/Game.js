import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { gameStyles } from "../Utils/Helper";

export default function Game({ reset, logOutToStart }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [enteredNumber, setEnteredNumber] = useState("");
  const [guessNumber, setGuessNumber] = useState(getRandomInt(10, 20));
  console.log(guessNumber);
  const [guessCount, setGuessCount] = useState(0);
  const [stage, setStage] = useState("guess");

  const resetHandler = () => {
    setEnteredNumber("");
  };

  const logOutHandler = () => {
    setEnteredNumber("");
    reset();
    logOutToStart();
  };

  const confirmHandler = () => {
    const userGuess = parseInt(enteredNumber);
    if (userGuess === guessNumber) {
      setStage("sucess");
    } else {
      setGuessCount(guessCount + 1);
      setStage("failure");
    }
  };

  const newGameHandler = () => {
    setGuessNumber(getRandomInt(10, 20));
    setEnteredNumber("");
    setGuessCount(0);
    setStage("guess");
  };

  const tryAgainHandler = () => {
    setStage("guess");
    setEnteredNumber("");
  };

  return (
    <SafeAreaView>
      <View style={gameStyles.logOutContainer}>
        <Button title="Log Out" onPress={logOutHandler} />
      </View>
      <View
        style={[
          gameStyles.container,
          { display: stage === "guess" ? "flex" : "none" },
        ]}
      >
        <Text style={gameStyles.label}>Guess A Number Between 10 & 20</Text>
        <View style={gameStyles.userContainer}>
          <Text style={gameStyles.enterNumber}>Enter a Number</Text>
          <TextInput
            style={gameStyles.input}
            value={enteredNumber}
            onChangeText={(text) => setEnteredNumber(text)}
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
            source={require("../assets/wrongGuess.jpg")}
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

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     shadowColor: "#000000",
//     shadowRadius: 6,
//     borderRadius: 15,

//     // marginTop: 40, // Add some padding to the content inside the container
//   },
//   userContainer: {
//     width: "100%", // Set the width to take 80% of the screen width
//     height: 400,
//     backgroundColor: "#CCCCCC", // Set the background color to grey
//     marginTop: 20,
//     padding: 20, // Add some padding to the content inside the container
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowRadius: 6,
//     borderRadius: 20,
//   },
//   enterNumber: {
//     marginTop: 20,
//     color: "blue",
//     fontSize: 24,
//     marginVertical: 8,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   label: {
//     marginTop: 30,
//     color: "blue",
//     fontSize: 24,
//     marginVertical: 8,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   desc: {
//     color: "purple",
//     marginLeft: 12,
//   },
//   input: {
//     color: "#6B0F4D",
//     borderBottomColor: "#6B0F4D",
//     borderBottomWidth: 5,
//     width: 100,
//     alignSelf: "center",
//     fontSize: 20,
//     textAlign: "center",
//     paddingBottom: 10,
//     fontWeight: "bold",
//     marginTop: 20,
//   },
//   buttonContainer: {
//     //   display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//     padding: 20,
//   },
//   logOut: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },
//   desc: {
//     color: "purple",
//     marginLeft: 12,
//   },
//   checkboxContainer: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   error: {
//     color: "#7F848E",
//     fontWeight: "bold",
//     fontSize: 18,
//   },
//   reset: {
//     color: "#ED33FF",
//     fontWeight: "bold",
//     fontSize: 24,
//   },
//   start: {
//     color: "#337EFF",
//     fontWeight: "bold",
//     fontSize: 24,
//   },

//   image: {
//     width: 150,
//     height: 150,
//     marginTop: 30,
//     alignSelf: "center",
//   },

//   logOutContainer: {
//     flexDirection: "row-reserve",
//     alignItems: "flex-end",
//     padding: 16,
//   },
// });

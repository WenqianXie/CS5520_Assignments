import { StyleSheet } from "react-native";
// This is a helper file that stores common styles and colors

export const colors = {
  blue: "#0000FF",
  purple: "#800080",
  white: "#ffffff",
  ivory: "#fffff0",
  red: "#ff0000",
  black: "#000000",
  lightYellow: "#ffebcd",
  lightBlue: "#6495ed",
};

export const headerStyles = StyleSheet.create({
  header: {
    marginTop: 10,
    padding: 50,
  },

  headerText: {
    fontSize: 40,
    color: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export const startingStyles = StyleSheet.create({
  label: {
    color: colors.purple,
    fontSize: 20,
    marginVertical: 15,
  },

  input: {
    color: colors.purple,
    borderBottomColor: colors.purple,
    borderBottomWidth: 3,
    width: 300,
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 5,
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 30,
  },

  container: {
    width: "90%",
    height: 500,
    backgroundColor: colors.ivory,
    padding: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    borderRadius: 20,
    elevation: 50,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  checkboxText: {
    color: colors.purple,
    fontSize: 15,
    marginVertical: 8,
  },

  reset: {
    fontWeight: "bold",
    fontSize: 30,
  },

  start: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export const confirmStyles = StyleSheet.create({
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
    backgroundColor: colors.ivory,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    borderRadius: 20,
    elevation: 50,
    padding: 15,
  },

  textStyle: {
    textAlign: "left",
    fontSize: 24,
    color: colors.blue,
  },

  textInfoStyle: {
    textAlign: "left",
    fontSize: 24,
    color: colors.purple,
    fontWeight: "bold",
  },

  modalButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  goBack: {
    color: colors.red,
    fontWeight: "bold",
    fontSize: 24,
    marginRight: 30,
  },
  continue: { color: colors.blue, fontWeight: "bold", fontSize: 24 },
});

export const gameStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  userContainer: {
    width: "100%",
    height: 300,
    backgroundColor: colors.ivory,
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    marginTop: 20,
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    borderRadius: 20,
    elevation: 50,
  },

  enterNumber: {
    marginTop: 20,
    color: colors.blue,
    fontSize: 24,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  label: {
    marginTop: 10,
    color: colors.blue,
    fontSize: 24,
    // marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  input: {
    color: colors.purple,
    borderBottomColor: colors.purple,
    borderBottomWidth: 5,
    width: 100,
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10,
    fontWeight: "bold",
    marginTop: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },

  reset: {
    color: colors.red,
    fontWeight: "bold",
    fontSize: 24,
  },

  start: {
    color: colors.blue,
    fontWeight: "bold",
    fontSize: 24,
  },

  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: "center",
  },

  logOutContainer: {
    flexDirection: "row-reserve",
    alignItems: "flex-end",
    padding: 16,
  },
});

export const appStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  gameContainer: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },
});

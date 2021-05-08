import React from "react";
import { useState } from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors } from "../../shared/Colors";
import { Screens } from "../../../App";

export const Login = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const clearCredentials = () => {
    setUserCredentials({
      username: "",
      password: "",
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.container}
    >
      {/* <View style={styles.container}> */}
      {/* <View style={styles.containerInputs}> */}
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../../assets/logo.png")}
      ></Image>
      {/* <Input
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="black"
            onChangeText={(user) => {
              setUserCredentials({ ...userCredentials, username: user });
            }}
            defaultValue={userCredentials.username}
            leftIcon={{ type: "font-awesome", name: "user" }}
            underlineColorAndroid={"rgba(0,0,0,0)"}
          />
          <Input
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(pw) =>
              setUserCredentials({ ...userCredentials, password: pw })
            }
            defaultValue={userCredentials.password}
            leftIcon={{ type: "font-awesome", name: "lock" }}
            underlineColorAndroid={"rgba(0,0,0,0)"}
          /> */}
      <Button
        buttonStyle={styles.loginBtn}
        containerStyle={styles.loginBtnContainer}
        title="Login"
        onPress={() => {
          clearCredentials();
          props.setActiveScreen(Screens.charactersList);
        }}
      />
      {/* </View> */}
      {/* </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  containerInputs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "55%",
    marginTop: 20,
  },
  input: {
    textAlign: "center",
    marginVertical: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  logo: {
    width: 200,
    height: 250,
  },
  loginBtn: {
    color: "white",
    backgroundColor: Colors.main,
    width: 150,
  },
  loginBtnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 100,
  },
});

export default Login;

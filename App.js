import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { Input, Button } from "react-native-elements";

export default function App() {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const clearCredentials = () => {
    setUserCredentials({
      username: "",
      password: "",
    });
  };

  return (
    <ImageBackground
      source={require("./app/assets/background.jpg")}
      style={styles.container}
    >
      {!loading ? (
        <View style={styles.container}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("./app/assets/logo.png")}
          ></Image>
          <View style={styles.containerInputs}>
            <Input
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="black"
              onChangeText={(user) => {
                setUserCredentials({ ...userCredentials, username: user });
              }}
              defaultValue={userCredentials.username}
              leftIcon={{ type: "font-awesome", name: "user" }}
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
            />
            <Button
              buttonStyle={styles.loginBtn}
              containerStyle={styles.loginBtnContainer}
              title="Login"
              onPress={() => {
                setLoading(true);
                clearCredentials();
                setTimeout(() => setLoading(false), 2000);
              }}
            />
          </View>
        </View>
      ) : null}
      {loading ? (
        <View style={[styles.loadingContainer]}>
          <ActivityIndicator size="large" color="rgb(11,88,49)" />
        </View>
      ) : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  },
  logo: {
    width: 200,
    height: 250,
  },
  loginBtn: {
    color: "white",
    backgroundColor: "rgb(11,88,49)",
    width: "75%",
  },
  loginBtnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "75%",
    // marginBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

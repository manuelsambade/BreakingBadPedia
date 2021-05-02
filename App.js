import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require("./app/assets/background.jpg")}
      style={styles.container}
    >
      <View>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={{ marginVertical: 100 }}>
          <Button
            title="Login"
            onPress={() => Alert.alert("Simple Button pressed")}
            color="orange"
          />
        </View>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "rgba(255,175, 0, 0.09)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    textAlign: "center",
    marginVertical: 8,
    height: 35,
    borderWidth: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

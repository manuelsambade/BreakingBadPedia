import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CharactersList } from "./app/screens/characters-list/CharactersList";
import { CharacterDetails } from "./app/screens/character-details/CharacterDetails";
import Login from "./app/screens/login/Login";

export const Screens = {
  login: "login",
  charactersList: "charactersList",
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState(Screens.login);

  return (
    <View style={styles.container}>
      {activeScreen == Screens.login ? (
        <Login setActiveScreen={setActiveScreen} />
      ) : null}
      {activeScreen == Screens.charactersList ? (
        <CharactersList setActiveScreen={setActiveScreen} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

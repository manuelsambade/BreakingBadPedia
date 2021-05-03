import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { CharactersList } from "./app/characters-list/CharactersList";
import { CharacterDetails } from "./app/character-details/CharacterDetails";
import Login from "./app/login/Login";

export const Screens = {
  login: "login",
  charactersList: "charactersList",
  characterDetails: "characterDetails",
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
      {activeScreen == Screens.characterDetails ? (
        <CharacterDetails setActiveScreen={setActiveScreen} />
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

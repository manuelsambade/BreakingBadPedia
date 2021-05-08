import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CharactersList } from "./app/screens/characters-list/CharactersList";
import { CharacterDetails } from "./app/screens/character-details/CharacterDetails";
import Login from "./app/screens/login/Login";
import * as Font from "expo-font";

export const Screens = {
  login: "login",
  charactersList: "charactersList",
  characterDetails: "characterDetails",
};

export default function App() {
  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
  }, []);

  const [activeScreen, setActiveScreen] = useState(Screens.login);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  return (
    <>
      {activeScreen == Screens.login && (
        <View style={styles.container}>
          <Login setActiveScreen={setActiveScreen} />
        </View>
      )}
      {activeScreen == Screens.charactersList && (
        <CharactersList
          setActiveScreen={setActiveScreen}
          setCurrentCharacter={setCurrentCharacter}
        />
      )}
      {activeScreen == Screens.characterDetails && (
        <CharacterDetails
          setActiveScreen={setActiveScreen}
          character={currentCharacter}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

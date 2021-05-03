import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const CharactersList = (props) => {
  return (
    <View style={styles.container}>
      <Text>Characters List!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CharactersList;

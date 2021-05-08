import React from "react";
import { StyleSheet } from "react-native";
import {
  Left,
  Right,
  Body,
  Icon,
  ListItem,
  Thumbnail,
  Text,
} from "native-base";
import { Screens } from "../../../App";

export const CharactersListRow = (props) => {
  return (
    <ListItem
      avatar
      button
      onPress={() => {
        console.log("GO TO DETAILS SCREEN!");
        props.setCurrentCharacter(props.character);
        props.setActiveScreen(Screens.characterDetails);
      }}
    >
      <Left>
        <Thumbnail
          source={{
            uri: props.character.img,
          }}
        />
      </Left>
      <Body>
        <Text>{props.character.nickname}</Text>
        <Text note>{props.character.name}</Text>
      </Body>
      <Right>
        <Icon name="arrow-forward-outline" />
      </Right>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  listItemTitle: {
    alignSelf: "center",
    marginStart: 10,
  },
});

export default CharactersListRow;

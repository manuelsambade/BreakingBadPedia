import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Content,
} from "native-base";
import { Screens } from "../../../App";
import Colors from "../../shared/Colors";

export const CharacterDetails = (props) => {
  return (
    <Container>
      <Header style={styles.header} androidStatusBarColor={Colors.main}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Character Info</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              props.setActiveScreen(Screens.charactersList);
            }}
          >
            <Icon name="arrow-back-outline" />
          </Button>
        </Right>
      </Header>
      <Content>
        <Text>{props.character.nickname}</Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.main,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CharacterDetails;

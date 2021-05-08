import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
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
  List,
} from "native-base";
import Colors from "../../shared/Colors";
import { Screens } from "../../../App";
import { CharactersListRow } from "./CharactersListRow";
import { getCharacters } from "../../shared/BBAPI";

export const CharactersList = (props) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((result) => {
      if (result.data) {
        setCharacters(result.data);
      }
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Header style={styles.header} androidStatusBarColor={Colors.main}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Characters List</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              props.setActiveScreen(Screens.login);
            }}
          >
            <Icon name="arrow-back-outline" />
          </Button>
        </Right>
      </Header>
      {!loading ? (
        <Content>
          <List>
            {characters.map((c) => {
              return (
                <CharactersListRow
                  character={c}
                  setActiveScreen={props.setActiveScreen}
                  setCurrentCharacter={props.setCurrentCharacter}
                />
              );
            })}
          </List>
        </Content>
      ) : null}
      {loading ? (
        <View style={[styles.loadingContainer]}>
          <ActivityIndicator size="large" color={Colors.main} />
        </View>
      ) : null}
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

export default CharactersList;

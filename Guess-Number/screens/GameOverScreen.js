import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          //   source={require("../assets/success.png")}
          source={{
            uri: "https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/styles/featured_media_detail/public/news/featured_media/48835889383_c5959fd02c_o.jpg?X1tupMMwIIblrefeeWgXSO43YI0TsDZ9&itok=x5usRWQ9",
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text>Number of Round: {props.roundNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
});

export default GameOverScreen;

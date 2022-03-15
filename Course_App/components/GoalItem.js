import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

function GoalItem(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.goal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

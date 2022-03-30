import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../Data/DummyData";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals OverView Screen - {catId} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
export default MealsOverviewScreen;

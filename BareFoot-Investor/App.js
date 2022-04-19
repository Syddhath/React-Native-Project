import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./app/Components/Navigation";

export default function App() {
  return (
    <NavigationContainer style={styles.screen}>
      <AppNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

{
  /* <>
<TouchableWithoutFeedback
  style={styles.screen}
  onPress={() => {
    Keyboard.dismiss();
  }}
> */
}

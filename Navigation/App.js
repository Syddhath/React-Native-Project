import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Screen } from "./app/components/Screen";
import {createStackNavigator} from ''



const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
  </Screen>
)
const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
)
export default function App() {
  return (
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

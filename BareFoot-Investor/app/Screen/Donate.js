import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Linking } from "react-native";

function Donate(props) {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Button
        title="Donate"
        onPress={() => {
          Linking.openURL(
            "https://www.paypal.com/donate/?business=4WF6GXRS4DFTL&no_recurring=0&item_name=BareFoot+Expenses&currency_code=AUD"
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Donate;

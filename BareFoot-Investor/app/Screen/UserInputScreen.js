import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import Card from "../Components/Card";

function UserInputScreen({ navigation }) {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  // Modal

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };
  const selectedNumber = ({}) => {
    setEnteredValue(parseInt(enteredValue));
    setSelectedValue(enteredValue);
  };

  var DailyExpenses = (selectedValue * 60) / 100;
  DailyExpenses = DailyExpenses.toFixed(2);

  var Splurge = (selectedValue * 10) / 100;
  Splurge = Splurge.toFixed(2);

  var Smile = (selectedValue * 10) / 100;
  Smile = Smile.toFixed(2);

  var FireExtinguisher = (selectedValue * 20) / 100;
  FireExtinguisher = FireExtinguisher.toFixed(2);

  const resetHandler = () => {
    setEnteredValue("");
    setSelectedValue("");
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Income </Text>
        <Text style={styles.subheader}>
          Enter your weekly income, after tax.{" "}
        </Text>
      </View>
      <Card style={styles.inputContainer}>
        <Text>$</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={numberInputHandler}
          value={enteredValue && { numberInputHandler }}
        />
      </Card>

      {/* Button */}

      <View style={styles.button}>
        <Button title="Enter" onPress={selectedNumber} />
      </View>

      {/* Accounts  */}

      <Card style={styles.card}>
        <View style={styles.cardStyle}>
          <View>
            <Text style={styles.expStyle}>DailyExpenses </Text>
          </View>
          <View>
            <Text style={styles.expStyle1}>${DailyExpenses} </Text>
          </View>
        </View>
      </Card>

      <Card style={styles.card}>
        <View style={styles.cardStyle}>
          <View>
            <Text style={styles.expStyle}>Splurge </Text>
          </View>
          <View>
            <Text style={styles.expStyle1}>${Splurge} </Text>
          </View>
        </View>
      </Card>

      <Card style={styles.card}>
        <View style={styles.cardStyle}>
          <View>
            <Text style={styles.expStyle}>Smile </Text>
          </View>
          <View>
            <Text style={styles.expStyle1}>${Smile} </Text>
          </View>
        </View>
      </Card>

      <Card style={styles.card}>
        <View style={styles.cardStyle}>
          <View>
            <Text style={styles.expStyle}>FireExtinguisher </Text>
          </View>
          <View>
            <Text style={styles.expStyle1}>${FireExtinguisher} </Text>
          </View>
        </View>
      </Card>

      {/* Accounts  */}

      {/* Modal */}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Account 1: Daily Expenses:- An everyday transaction account with
                a debit card that gets 60% of your income. Use this account to
                pay for your regular daily expenses like rent, utilities,
                regular bills and groceries. The trick here is to keep all your
                expenses under 60% of your income.
              </Text>
              <Text style={styles.modalText}>
                Account 2: Splurge (or Fun Spending):- An everyday transaction
                account with a debit card that gets 10% of your income. This is
                your account for fun purchases and social activities. Use it for
                social meet ups, nights out to the movies or save it up to buy a
                new pair of shoes.
              </Text>
              <Text style={styles.modalText}>
                Account 3: Fire Extinguisher (or Debt Reducer):- An online
                account that gets 20% of your income. This money is for fighting
                financial fires like any existing debt or bigger non-regular
                bills such as repairs and maintenance. Money does not sit in
                this account. It moves through on its way to paying the bills
                you have. If there are no debts or bills to pay, the money
                spills over to the Mojo bucket.
              </Text>
              <Text style={styles.modalText}>
                **Account 4: Smile (or Adventures):- An online account that gets
                10% of your income. This is a long-term savings account for big
                purchase goals such as a holiday, new computer or updating your
                car.
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Buckets Info</Text>
        </Pressable>
      </View>
      {/* Modal */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
    marginLeft: "1%",
    backgroundColor: "white",
  },
  card: {
    flexDirection: "row",
    marginTop: 10,
    width: "90%",
    padding: 20,
    backgroundColor: "yellow",
  },

  input: {
    width: 100,
    marginLeft: "1%",
  },

  button: {
    backgroundColor: "black",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    fontWeight: "bold",
  },

  expStyle: {
    fontSize: 16,
    marginRight: 10,
  },
  expStyle1: {
    fontSize: 16,
  },

  cardStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  // Modal
});

export default UserInputScreen;

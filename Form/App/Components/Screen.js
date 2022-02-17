import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

import React from 'react';

function Screen({ children }) {
    return
    <SafeAreaView style={styles.screen}>
        <View>{children}</View>
    </SafeAreaView>

}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
});
export default Screen;
import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.appBarBackground} />
      <AppBarTab title="Repositories" />
    </View>
  );
};

export default AppBar;

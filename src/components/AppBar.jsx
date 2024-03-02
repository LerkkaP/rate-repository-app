import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { ME } from "../graphql/queries";
import { useQuery, useApolloClient } from "@apollo/client";
import useAuthStorage from "../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const isAuthenticated = data && data.me;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" path="/" />
        {isAuthenticated ? (
          <>
            <AppBarTab title="Review" path="/review" />
            <AppBarTab title="My reviews" path="/my-reviews" />
            <AppBarTab title="Sign out" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab title="Sign in" path="/signin" />
            <AppBarTab title="Sign up" path="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

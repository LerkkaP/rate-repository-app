import React from "react";
import { Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = {
  textPrimary: {
    color: theme.colors.appBarText,
    marginBottom: 20,
    marginLeft: 15,
  },
};

const AppBarTab = ({ title }) => {
  return (
    <Pressable>
      <Text style={styles.textPrimary} fontWeight="bold">
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;

import React from "react";
import { Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import theme from "../theme";

const styles = {
  textPrimary: {
    color: theme.colors.appBarText,
    marginBottom: 20,
    marginLeft: 15,
  },
};

const AppBarTab = ({ title, path, onPress }) => {
  if (path) {
    return (
      <Link to={path}>
        <Text style={styles.textPrimary} fontWeight="bold">
          {title}
        </Text>
      </Link>
    );
  }

  return (
    <Pressable onPress={onPress}>
      <Text style={styles.textPrimary} fontWeight="bold">
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;

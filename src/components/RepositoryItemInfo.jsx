import { View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  text: {
    marginLeft: 15,
    flex: 1,
  },
  language: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    color: "white",
    padding: 4,
    borderRadius: 4,
  },
  description: {
    paddingVertical: 10,
  },
});

const RepositoryItemInfo = ({ fullName, description, language }) => (
  <View>
    <Text fontWeight="bold">{fullName}</Text>
    <Text color="textSecondary" style={styles.description}>
      {description}
    </Text>
    <Text style={styles.language}>{language}</Text>
  </View>
);

export default RepositoryItemInfo;

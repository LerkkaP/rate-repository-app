import { View, StyleSheet } from "react-native";
import Text from "./Text";
import roundNumber from "../utils/roundNumber";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 50,
    marginLeft: -35,
    paddingTop: 15,
  },
});

const RepositoryItemStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => (
  <View style={styles.container}>
    <View>
      <Text fontWeight="bold" style={{ textAlign: "center" }}>
        {roundNumber(stargazersCount)}
      </Text>
      <Text color="textSecondary">Stars</Text>
    </View>
    <View>
      <Text fontWeight="bold" style={{ textAlign: "center" }}>
        {roundNumber(forksCount)}
      </Text>
      <Text color="textSecondary">Forks</Text>
    </View>
    <View>
      <Text fontWeight="bold" style={{ textAlign: "center" }}>
        {roundNumber(reviewCount)}
      </Text>
      <Text color="textSecondary">Reviews</Text>
    </View>
    <View>
      <Text fontWeight="bold" style={{ textAlign: "center" }}>
        {roundNumber(ratingAverage)}
      </Text>
      <Text color="textSecondary">Rating</Text>
    </View>
  </View>
);

export default RepositoryItemStats;

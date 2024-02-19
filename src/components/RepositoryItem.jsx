import { View, Image, StyleSheet, Pressable, Linking } from "react-native";
import RepositoryItemStats from "./RepositoryItemStats";
import RepositoryItemInfo from "./RepositoryItemInfo";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingVertical: 25,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  text: {
    marginLeft: 15,
    flex: 1,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: "white",
    paddingVertical: 15,
    borderRadius: 4,
    textAlign: "center",
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: repository.ownerAvatarUrl,
        }}
      />
      <View style={styles.text}>
        <RepositoryItemInfo
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
        />
        <RepositoryItemStats
          stargazersCount={repository.stargazersCount}
          forksCount={repository.forksCount}
          reviewCount={repository.reviewCount}
          ratingAverage={repository.ratingAverage}
        />
        {repository.url && (
          <Pressable onPress={() => Linking.openURL(repository.url)}>
            <Text style={styles.button} fontWeight="bold">
              Open in GitHub
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default RepositoryItem;

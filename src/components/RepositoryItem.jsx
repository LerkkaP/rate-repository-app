import { View, Image, StyleSheet } from "react-native";
import RepositoryItemStats from "./RepositoryItemStats";
import RepositoryItemInfo from "./RepositoryItemInfo";

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
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
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
      </View>
    </View>
  );
};

export default RepositoryItem;

import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";
import theme from "../theme";
import Text from "./Text";
import formatDate from "../utils/formatDate";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingVertical: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  rating: {
    color: theme.colors.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={[styles.rating, { textAlign: "center", lineHeight: 40 }]}>
          {review.rating}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text color="textSecondary">
          {formatDate({ date: review.createdAt })}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  let { id } = useParams();
  const { repository, loading } = useRepository({ id });
  const { reviews } = useReviews({ id });

  const reviewNodes =
    reviews && reviews.edges ? reviews.edges.map((edge) => edge.node) : [];

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!repository) {
    return <Text>Repository not found.</Text>;
  }
  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryItem repository={repository} />}
    />
  );
};

export default SingleRepository;

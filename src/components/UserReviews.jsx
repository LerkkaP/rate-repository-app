import React from "react";
import { View, StyleSheet } from "react-native-web";
import useCurrentUser from "../hooks/useCurrentUser";
import theme from "../theme";
import Text from "./Text";
import formatDate from "../utils/formatDate";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 15,
    paddingVertical: 25,
    marginTop: 10,
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
});

export const UserReviews = () => {
  const bool = true;
  const { reviews } = useCurrentUser({ bool });

  return (
    <>
      {reviews && reviews.edges && reviews.edges.length > 0 ? (
        <View>
          {reviews.edges.map((edge) => {
            const { node } = edge;
            const { id, text, rating, createdAt, repository } = node;

            return (
              <View key={id} style={styles.container}>
                <View style={styles.ratingContainer}>
                  <Text
                    style={[
                      styles.rating,
                      { textAlign: "center", lineHeight: 40 },
                    ]}
                  >
                    {rating}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text fontWeight="bold">{repository.name}</Text>
                  <Text color="textSecondary">
                    {formatDate({ date: createdAt })}
                  </Text>
                  <Text>{text}</Text>
                </View>
              </View>
            );
          })}
        </View>
      ) : (
        <Text>No reviews available</Text>
      )}
    </>
  );
};

export default UserReviews;

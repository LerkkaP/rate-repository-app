import React from "react";
import { View, StyleSheet, Pressable } from "react-native-web";
import useCurrentUser from "../hooks/useCurrentUser";
import theme from "../theme";
import Text from "./Text";
import formatDate from "../utils/formatDate";
import { useNavigate } from "react-router-native";
import useDelete from "../hooks/useDelete";

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
  buttonRegular: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 2,
    marginTop: 4
  },
  buttonDanger: {
    backgroundColor: "red",
    alignSelf: "flex-start",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 2,
    marginTop: 4,
    marginLeft: 8
  }
});

export const UserReviews = () => {
  const bool = true;
  const { reviews, refetch } = useCurrentUser({ bool });
  const navigate = useNavigate();
  const deleteReview = useDelete();
  
  const handleView = (id) => {
    navigate(`/${id}`);
  }

  const handleDelete = async (id) => {
    await deleteReview({ id });
    refetch();
  }

  return (
    <>
      {reviews && reviews.edges && reviews.edges.length > 0 ? (
        <View>
          {reviews.edges.map((edge) => {
            const { node } = edge;
            const { id, repositoryId, text, rating, createdAt, repository } = node;

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
                  <View style={{flexDirection: "row"}}>
                    <Pressable onPress={() => handleView(repositoryId)}>
                      <Text style={styles.buttonRegular} >
                        View repository
                      </Text>
                    </Pressable>
                    <Pressable onPress={() => handleDelete(id)}>
                      <Text style={styles.buttonDanger} >
                        Delete review
                      </Text>
                    </Pressable>
                  </View>
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

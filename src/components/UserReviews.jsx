import React from "react";
import { View, StyleSheet, Pressable, FlatList, Alert } from "react-native";
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
    textAlign: "center",
    lineHeight: 40,
  },
  buttonRegular: {
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 2,
    marginTop: 4,
  },
  buttonDanger: {
    backgroundColor: "red",
    alignSelf: "flex-start",
    color: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 2,
    marginTop: 4,
    marginLeft: 8,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const UserReviews = () => {
  const bool = true;
  const { reviews, refetch } = useCurrentUser({ bool });
  const navigate = useNavigate();
  const deleteReview = useDelete();

  const handleView = (id) => {
    navigate(`/${id}`);
  };

  const handleDelete = async (id) => {
    await deleteReview({ id });
    refetch();
  };

  const twoButtonAlert = (id) =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "CANCEL",
          style: "cancel",
        },
        { text: "DELETE", onPress: () => handleDelete(id) },
      ]
    );

  const renderItem = ({ item }) => {
    const { id, repositoryId, text, rating, createdAt, repository } = item.node;

    return (
      <View key={id} style={styles.container}>
        <View>
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text fontWeight="bold">{repository.name}</Text>
          <Text color="textSecondary">{formatDate({ date: createdAt })}</Text>
          <Text>{text}</Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={() => handleView(repositoryId)}>
              <Text style={styles.buttonRegular}>View repository</Text>
            </Pressable>
            <Pressable onPress={() => twoButtonAlert(id)}>
              <Text style={styles.buttonDanger}>Delete review</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  if (!reviews || !reviews.edges) {
    return <Text>No reviews available</Text>;
  }

  return (
    <FlatList
      data={reviews.edges}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default UserReviews;

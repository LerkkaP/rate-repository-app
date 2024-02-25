import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  const navigate = useNavigate();

  const onPressFunction = (id) => {
    navigate(`/${id}`);
  };
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Pressable onPress={() => onPressFunction(item.id)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
    />
  );
};

const RepositoryList = () => {
  const [selectedRepository, setselectedRepository] = useState("CREATED_AT");
  const [direction, setdirection] = useState("DESC")
  const [filter, setFilter] = useState("CREATED_AT")
  const { repositories } = useRepositories({selectedRepository, direction});

  return (
    <>
      <FlatList
        ListHeaderComponent={<Picker
          selectedValue={filter}
          onValueChange={(itemValue) => {
            setFilter(itemValue)
            setselectedRepository(
              itemValue === "lowest" ? "RATING_AVERAGE" : itemValue
            );
            setdirection(itemValue === "lowest" ? "ASC" : "DESC");
          }}>
          <Picker.Item label="Latest repositories" value="CREATED_AT" />
          <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE" />
          <Picker.Item label="Lowest rated repositories" value="lowest" />
        </Picker>}
      />
      <RepositoryListContainer repositories={repositories} />
    </>
  );
};

export default RepositoryList;

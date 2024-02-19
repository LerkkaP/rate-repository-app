import React from "react";
import { Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";

const RepositoryItemIndividual = () => {
  let { id } = useParams();
  const { repository, loading } = useRepository({ id });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!repository) {
    return <Text>Repository not found.</Text>;
  }
  return <RepositoryItem repository={repository} />;
};

export default RepositoryItemIndividual;

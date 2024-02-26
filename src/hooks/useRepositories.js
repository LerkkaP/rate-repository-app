import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({ selectedRepository, direction, keyword }) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: {
      orderBy: selectedRepository,
      orderDirection: direction,
      searchKeyword: keyword,
    },
    fetchPolicy: "cache-and-network",
  });
  const repositories = data ? data.repositories : null;

  return { repositories, loading, error };
};

export default useRepositories;

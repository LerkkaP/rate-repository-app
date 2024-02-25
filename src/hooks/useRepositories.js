import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({selectedRepository, direction}) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy: selectedRepository, orderDirection: direction},
    fetchPolicy: "cache-and-network",
  });
  const repositories = data ? data.repositories : null;

  return { repositories, loading, error };
};

export default useRepositories;

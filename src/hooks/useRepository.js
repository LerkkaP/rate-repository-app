import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({ id }) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  const repository = data ? data.repository : null;
  return { repository, loading, error };
};

export default useRepository;

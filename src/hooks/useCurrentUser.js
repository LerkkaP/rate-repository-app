import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useCurrentUser = ({ bool }) => {
  const { data, error, loading } = useQuery(ME, {
    variables: { includeReviews: bool },
    fetchPolicy: "cache-and-network",
  });
  const reviews = data?.me?.reviews || null;
  return { reviews, loading, error };
};

export default useCurrentUser;

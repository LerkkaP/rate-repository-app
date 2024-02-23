import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";

const useReview = () => {
  const navigate = useNavigate();

  const [mutate] = useMutation(ADD_REVIEW);
  const addReview = async ({ owner, name, review, rating }) => {
    try {
      const result = await mutate({
        variables: {
          review: {
            ownerName: owner,
            repositoryName: name,
            rating: rating,
            text: review,
          },
        },
      });
      const repositoryId = result.data.createReview.repositoryId;

      navigate(`/${repositoryId}`);
    } catch (error) {
      console.error("There was an error trying to add the review.", error);
    }
  };

  return [addReview];
};

export default useReview;

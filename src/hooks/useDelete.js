import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDelete = () => {
  const [mutate] = useMutation(DELETE_REVIEW);
  const deleteReview = async ({ id }) => {
    console.log(id)
    try {
        await mutate({ variables: { deleteReviewId: id } });
    } catch (error) {
      console.error("There was an error trying to delete the review.", error);
    }
  };
  return deleteReview;
};

export default useDelete;

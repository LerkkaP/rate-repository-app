import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(ADD_USER);

  const signUp = async ({ username, password }) => {
    try {
      const result = await mutate({
        variables: { user: { username: username, password: password } },
      });

      return result;
    } catch (error) {
      console.error("There was an error in creating the account.", error);
    }
  };

  return [signUp, result];
};

export default useSignUp;

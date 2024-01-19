import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import useAuthStorage from "../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    try {
      const result = await mutate({
        variables: { credentials: { username: username, password: password } },
      });
      const accessToken = result.data.authenticate.accessToken;
      await authStorage.setAccessToken(accessToken);
      apolloClient.resetStore();
      navigate("/");

      return result;
    } catch (error) {
      console.error("Incorrect credentials", error);
    }
  };

  return [signIn, result];
};

export default useSignIn;

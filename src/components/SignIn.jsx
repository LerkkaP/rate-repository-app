import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: "white",
    paddingVertical: 15,
    borderRadius: 4,
    textAlign: "center",
  },
  form: {
    marginHorizontal: 15,
  },
  password: {
    marginVertical: 15,
  },
  placeholderText: {
    color: theme.colors.textSecondary,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              placeholderTextColor={styles.placeholderText.color}
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
              style={styles.password}
              placeholderTextColor={styles.placeholderText.color}
            />
            <Pressable onPress={handleSubmit}>
              <Text style={styles.button} fontWeight="bold">
                Sign in
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;

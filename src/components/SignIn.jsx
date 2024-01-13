import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

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

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    const { username, password } = values;
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
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

export default SignIn;

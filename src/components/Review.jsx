import { View, StyleSheet, Text, Pressable } from "react-native-web";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import * as yup from "yup";
import useReview from "../hooks/useReview";

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
  input: {
    marginVertical: 15,
  },
  placeholderText: {
    color: theme.colors.textSecondary,
  },
});

const validationSchema = yup.object().shape({
  owner: yup.string().required("Repository owner name is required"),
  name: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0)
    .max(100)
    .typeError("Rating has to be a number"),
  review: yup.string(),
});

export const ReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    owner: "",
    name: "",
    rating: "",
    review: "",
  };
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <View style={styles.form}>
            <FormikTextInput
              name="owner"
              placeholder="Repository owner name"
              placeholderTextColor={styles.placeholderText.color}
            />
            <FormikTextInput
              name="name"
              placeholder="Repository name"
              style={styles.input}
              placeholderTextColor={styles.placeholderText.color}
            />
            <FormikTextInput
              name="rating"
              placeholder="Rating between 0 and 100"
              placeholderTextColor={styles.placeholderText.color}
            />
            <FormikTextInput
              name="review"
              placeholder="Review"
              style={styles.input}
              placeholderTextColor={styles.placeholderText.color}
              multiline
            />
            <Pressable onPress={handleSubmit}>
              <Text style={styles.button} fontWeight="bold">
                Create a review
              </Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

const Review = () => {
  const [addReview] = useReview();

  const onSubmit = async (values) => {
    const { owner, name, rating, review } = values;

    const parsedRating = parseInt(rating, 10);

    try {
      await addReview({ owner, name, rating: parsedRating, review });
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewContainer onSubmit={onSubmit} />;
};

export default Review;

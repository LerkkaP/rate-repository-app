import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 4,
  },
  inputFieldError: {
    borderColor: "#d73a4a",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.inputField,
    style,
    error && styles.inputFieldError,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;

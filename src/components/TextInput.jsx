import { TextInput as NativeTextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 4,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.inputField, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;

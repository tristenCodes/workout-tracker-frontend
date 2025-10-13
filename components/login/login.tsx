import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const Login = () => {
  return (
    <View>
      <View style={styles.card}>
        <Form />
      </View>
    </View>
  );
};

const Form = () => {
  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.textInput} placeholder="email"></TextInput>
      <TextInput
        style={styles.textInput}
        secureTextEntry
        placeholder="password"
      ></TextInput>
      <Button title={"Log In"} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textInput: {
    height: 40,
    width: "100%",
    borderWidth: 0.5,
    padding: 10,
  },
  formContainer: {
    display: "flex",
    width: "80%",
    gap: 15,
  },
});

export default Login;

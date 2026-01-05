import { loginSchema, LoginValues } from "@/validation/login-schema";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useRouter } from "expo-router";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { View, StyleSheet, TextInput } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Button } from "react-native-paper";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

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
  const router = useRouter();
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginValues) => {
    try {
      const res = await fetch(`${API_URL}/api/Auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 401) {
        console.log("invalid username/pass");
        // invalid username / password. Don't allow login and display new error message.
        setError(
          "root",
          {
            message: "Invalid credentials.",
          },
          { shouldFocus: false }
        );
        return;
      } else if (res.status > 401 && res.status < 500) {
        console.log(
          res.status,
          "unauth, forbidden, not found, conflict, unprocessable, too many requests, etc."
        );
        // unauth, forbidden, not found, conflict, unprocessable, too many requests, etc.
        // Generic "your request is the problem error."
        return;
      } else if (res.status >= 500) {
        console.log("server side error");
        return;
      }

      router.navigate("/start-workout");
    } catch (error) {
      // big error occurred
    }
  };

  return (
    <View style={styles.formContainer}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="email"
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
          ></TextInput>
        )}
      ></Controller>
      <ErrorMessage
        errors={errors}
        name="email"
        render={({ message }) => (
          <Text
            style={{
              color: theme.colors.error,
            }}
          >
            {message}
          </Text>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="password"
            value={value}
            secureTextEntry
            onChangeText={onChange}
            autoCapitalize="none"
          ></TextInput>
        )}
      ></Controller>
      <ErrorMessage
        errors={errors}
        name="password"
        render={({ message }) => (
          <Text
            style={{
              color: theme.colors.error,
            }}
          >
            {message}
          </Text>
        )}
      />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Log in
      </Button>
      <ErrorMessage
        errors={errors as FieldErrors}
        name="root"
        render={({ message }) => (
          <Text
            style={{
              color: theme.colors.error,
            }}
          >
            {message}
          </Text>
        )}
      />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text>Don't have an account yet? </Text>
        <Link href={"/auth/signup"} push>
          Sign Up
        </Link>
      </View>
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

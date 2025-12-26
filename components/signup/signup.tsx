import { useNavigation } from "expo-router";
import { View, StyleSheet, TextInput } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { Button } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { signupSchema, SignupValues } from "@/validation/signup-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useCallback } from "react";

const Signup = () => {
  return (
    <View>
      <View style={styles.card}>
        <Form />
      </View>
    </View>
  );
};

const Form = () => {
  const navigation = useNavigation();
  const theme = useTheme();

  const onSubmit = useCallback(async (data: any) => {
    delete data.confirmPassword;

    const API_URL = process.env.EXPO_PUBLIC_API_URL;

    fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // redirect to home screen
        console.log("success", res);
      })
      .catch((res) => {
        // invalid, show error message
        console.log("fail", res);
      });
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupValues>({ resolver: zodResolver(signupSchema) });
  return (
    <View style={styles.formContainer}>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.textInput}
            placeholder="email address"
            value={value}
            onChangeText={onChange}
            autoCapitalize="none"
          />
        )}
      />
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
            secureTextEntry
            placeholder="password"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
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
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <TextInput
              style={styles.textInput}
              secureTextEntry
              placeholder="confirm password"
              value={value}
              onChangeText={onChange}
            />
          );
        }}
      />
      <ErrorMessage
        errors={errors}
        name="confirmPassword"
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
      <Button onPress={handleSubmit(onSubmit)} mode="contained">
        Sign Up
      </Button>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text>Already have an account? </Text>
        <Text onPress={navigation.goBack}>Login</Text>
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

export default Signup;

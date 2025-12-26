import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function Layout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            title: "Login",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          options={{
            title: "Signup",
            headerShown: false,
          }}
        />
      </Stack>
    </PaperProvider>
  );
}

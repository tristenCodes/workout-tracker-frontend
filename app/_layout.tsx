import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function Layout() {
  return (
    <PaperProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen
          name="start-empty-workout"
          options={{ presentation: "modal", title: "Start Workout" }}
        />
      </Stack>
    </PaperProvider>
  );
}

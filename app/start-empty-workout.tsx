import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { useColorScheme } from "../components/useColorScheme";

export default function StartEmptyWorkoutModal() {
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Start Empty Workout
      </Text>
      <Text style={[styles.body, { color: colors.text }]}>
        Build your workout from scratch. Swipe down to dismiss.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  body: {
    fontSize: 16,
  },
});

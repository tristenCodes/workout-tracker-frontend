import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import Colors from "../../constants/Colors";
import { useColorScheme } from "../../components/useColorScheme";

export default function Tab() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const colors = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Start</Text>
        <Pressable
          style={[styles.primaryButton, { backgroundColor: colors.tint }]}
          onPress={() => router.push("/start-empty-workout")}
        >
          <Text style={[styles.primaryButtonText, { color: colors.background }]}>
            Start an empty workout
          </Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Templates
        </Text>
        <Text style={[styles.templateItem, { color: colors.text }]}>
          My Templates
        </Text>
        <Text style={[styles.templateItem, { color: colors.text }]}>
          Example Templates
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 24,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: "#111827",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  templateItem: {
    fontSize: 16,
  },
});

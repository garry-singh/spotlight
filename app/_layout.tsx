import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ gestureEnabled: true }}>
          <Stack.Screen
            name="index"
            options={{
              title: "Feed",
            }}
          />
          <Stack.Screen
            name="notifications"
            options={{
              title: "Notifications",
              gestureEnabled: true, // Enable swipe back
              gestureDirection: "horizontal", // Ensures swipe works left-to-right
              headerBackButtonDisplayMode: "minimal",
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

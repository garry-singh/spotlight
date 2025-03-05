import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
        <Stack screenOptions={{ gestureEnabled: true, headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

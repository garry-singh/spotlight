import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/theme";
import InitialLayout from "@/components/initial-layout";
import ConvexAndClerkProvider from "@/providers/convex-and-clerk-provider";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function RootLayout() {
  return (
    <ConvexAndClerkProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ConvexAndClerkProvider>
  );
}

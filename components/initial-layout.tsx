import { useAuth } from "@clerk/clerk-expo";
import { Stack, useSegments } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; // Prevent running logic if auth state isn't ready

    const inAuthScreen = segments[0] === "(auth)"; // Check if user is in (auth) route
    const inTabsScreen = segments[0] === "(tabs)"; // Check if user is in (tabs) route

    if (!isSignedIn && !inAuthScreen) {
      router.replace("/(auth)/login"); // Redirect to login if user is not signed in and not in (auth) route
    } else if (isSignedIn && inAuthScreen && !inTabsScreen) {
      router.replace("/(tabs)"); // Redirect to (tabs) if user is signed in and in (auth) route and not in (tabs) route
    }
  }, [isLoaded, isSignedIn, segments]);

  if (!isLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}

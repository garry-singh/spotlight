import React from "react";
import { Redirect } from "expo-router";

// Redirect user to the feed page
export default function Index() {
  return <Redirect href="/(tabs)" />;
}

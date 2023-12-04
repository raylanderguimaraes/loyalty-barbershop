import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <StatusBar style="light" />
    </>
  );
}

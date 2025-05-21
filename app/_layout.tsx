import { Stack } from "expo-router";
import { Platform } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function RootLayout() {
  return (
    <TailwindProvider platform={Platform.OS}>
      <Stack />
    </TailwindProvider>
  );
}

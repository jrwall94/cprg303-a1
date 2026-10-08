import { Stack } from "expo-router";
export default function RootLayOut() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="post/[id]"
        options={{ title: "Posts", headerBackTitle: "Back" }}
      />
    </Stack>
  );
}

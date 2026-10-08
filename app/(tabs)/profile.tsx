import ProfileAccount from "@/components/ProfileAccount";
import ProfilePosts from "@/components/ProfilePosts";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <ProfileAccount />
      <ProfilePosts />
    </SafeAreaProvider>
  );
}

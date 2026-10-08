import ProfileAccount from "@/components/ProfileAccount";
import ProfilePosts from "@/components/ProfilePosts";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaProvider>
      <Stack.Screen
        options={{
          title: "Profile_Name",
          headerRight: () => (
            <View style={styles.headerIcons}>
              <Ionicons name="add-outline" size={30} />
              <Ionicons name="menu-outline" size={30} />
            </View>
          ),
        }}
      />
      <ProfileAccount />
      <ProfilePosts />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: "row",
    marginRight: 10,
    gap: 10,
  },
});

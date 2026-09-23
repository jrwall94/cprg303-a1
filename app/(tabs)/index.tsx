import { Alert, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSocial } from "../../components/BottomSocial";
import { Comments } from "../../components/Comments";
import { ContentPlaceholder } from "../../components/ContentPlaceholder";
import { ProfileHeader } from "../../components/ProfileHeader";

export default function IndexScreen() {
  const showAlert = () => Alert.alert("Alert Button pressed");
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ProfileHeader />
          <ContentPlaceholder />
          <BottomSocial />
          <Comments />
        </ScrollView>
        <Pressable
          onPress={showAlert}
          style={({ pressed }) => [
            {
              backgroundColor: "#2563EB",
              padding: 16,
              margin: 16,
              borderRadius: 8,
              alignItems: "center",
            },
            pressed && { opacity: 0.8 },
          ]}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Alert</Text>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

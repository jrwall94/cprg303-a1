import { useState } from "react";
import { Alert, Platform, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { BottomNavigation } from "../components/BottomNavigation";
import { ContentPlaceholder } from "../components/ContentPlaceholder";
import { ProfileHeader } from "../components/ProfileHeader";

export default function IndexScreen() {
  const [activeTab, setActiveTab] = useState("home");
  const showAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
    } else {
      Alert.alert("Alert Button pressed");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          {activeTab === "home" ? (
            <ScrollView>
              <ProfileHeader />
              <ContentPlaceholder />
            </ScrollView>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                {activeTab}
              </Text>
            </View>
          )}
          <BottomNavigation activeTab={activeTab} onChange={setActiveTab} />
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

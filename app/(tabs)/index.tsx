import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSocial } from "../../components/BottomSocial";
import { Comments } from "../../components/Comments";
import { ContentPlaceholder } from "../../components/ContentPlaceholder";
import { ProfileHeader } from "../../components/ProfileHeader";

export default function IndexScreen() {
  const showAlert = () => {
    if (Platform.OS === "web") {
      window.alert("Alert Button pressed");
      return;
    } else {
      Alert.alert("Alert Button pressed");
    }
  };
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <View style={styles.center}>
        <View style={styles.web}>
          <ScrollView>
            <ProfileHeader />
            <ContentPlaceholder />
            <BottomSocial />
            <Comments />
          </ScrollView>
          <Pressable
            onPress={showAlert}
            style={({ pressed }) => [
              styles.alertButton,
              pressed && styles.alertButtonPressed,
            ]}
          >
            <Text style={styles.alertButtonText}>Alert</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
  },
  web: {
    flex: 1,
    width: "100%",
    ...Platform.select({
      web: {
        maxWidth: 412,
      },
    }),
  },
alertButton: {
  backgroundColor: "#111111",
  marginHorizontal: 16,
  marginVertical: 12,
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: "center",
},

alertButtonPressed: {
  opacity: 0.7,
},

alertButtonText: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "700",
},
});

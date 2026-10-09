import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function ProfilePosts() {
  return (
    <View>
      <View style={styles.iconContainer}>
        <Ionicons name="grid-outline" size={30} />
        <Ionicons name="id-card-outline" size={30} />
      </View>
      <View style={styles.container}>
        <Ionicons name="add-circle-outline" size={100} />
        <Text style={styles.title}>Share photos and videos</Text>
        <Text style={{ textAlign: "center" }}>
          When you share photos and videos, they'll appear on your profile
        </Text>
        <Text style={{ color: "blue" }}>Share your first photo or video</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 8,
    marginTop: 15,
  },
  container: {
    marginTop: 40,
    alignItems: "center",
    gap: 20,
    maxWidth: 300,
    margin: "auto",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
});

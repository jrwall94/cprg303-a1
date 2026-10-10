import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function profileEdit() {
  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
      style={{ backgroundColor: "white", flex: 1 }}
    >
      <Stack.Screen
        options={{
          title: "Edit Profile",
          headerTitleAlign: "center",
        }}
      />
      <View style={styles.photoContainer}>
        <Image
          source={require("../assets/images/beech5.jpg")}
          style={styles.profilePic}
        />
        <Text style={{ color: "blue" }}>Change profile photo</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Name</Text>
          <TextInput placeholder="Name" />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Username</Text>
          <TextInput placeholder="Username" />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Website</Text>
          <TextInput placeholder="Website" />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Bio</Text>
          <TextInput placeholder="Bio" />
        </View>
      </View>
      <View style={styles.businessInfo}>
        <Text style={{ fontWeight: "bold" }}>Public business information</Text>
        <View style={styles.businessRow}>
          <Text style={styles.formLabel}>Page</Text>
          <View style={styles.businessItem}>
            <Text style={{ color: "grey" }}>Connect or Create</Text>
            <Ionicons name="chevron-forward" color="grey" size={15} />
          </View>
        </View>
        <View style={styles.businessRow}>
          <Text style={styles.formLabel}>Category</Text>
          <View style={styles.businessItem}>
            <Text style={{ color: "grey" }}>Entrepreneur</Text>
            <Ionicons name="chevron-forward" color="grey" size={15} />
          </View>
        </View>
        <View style={styles.businessRow}>
          <Text style={styles.formLabel}>Contact options</Text>
          <View style={styles.businessItem}>
            <Text style={{ color: "grey" }}>Email or Phone</Text>
            <Ionicons name="chevron-forward" color="grey" size={15} />
          </View>
        </View>
        <View style={styles.businessRow}>
          <Text style={styles.formLabel}>Profile display</Text>
          <View style={styles.businessItem}>
            <Text style={{ color: "grey" }}>Contact hidden</Text>
            <Ionicons name="chevron-forward" color="grey" size={15} />
          </View>
        </View>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "green" : "white" },
        ]}
      >
        <Text>Submit Change</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  photoContainer: {
    marginHorizontal: "auto",
    alignItems: "center",
    gap: 5,
    paddingBottom: 8,
  },
  form: {
    marginVertical: 5,
    borderTopColor: "grey",
    borderTopWidth: 0.5,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    marginHorizontal: 20,
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 40,
  },
  formLabel: {
    width: 100,
    fontWeight: "500",
  },
  businessInfo: {
    marginHorizontal: 20,
    marginTop: 10,
    gap: 20,
  },
  businessRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  businessItem: {
    gap: 15,
    flexDirection: "row",
  },
  button: {
    marginTop: 40,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: "auto",
    borderColor: "black",
    borderWidth: 1,
  },
});

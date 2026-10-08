import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProfileAccount() {
  return (
    <View>
      <Text style={styles.steps}>
        <Text style={{ color: "orange", fontWeight: "500" }}>0 OF 5</Text> STEPS
        COMPLETE <Ionicons name="chevron-down-outline" />
      </Text>
      <View style={styles.info}>
        <Image
          source={require("../assets/images/beech5.jpg")}
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.center}>0</Text>
          <Text>Posts</Text>
        </View>
        <View>
          <Text style={styles.center}>0</Text>
          <Text>Followers</Text>
        </View>
        <View>
          <Text style={styles.center}>0</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={{ marginLeft: 10 }}>Software Developer</Text>
      <View style={styles.info}>
        <Link href="../profileEdit" asChild>
          <Pressable>
            <Text style={styles.linkBox}>Edit Profile</Text>
          </Pressable>
        </Link>
        <Text style={styles.linkBox}>Promotions</Text>
        <Text style={styles.linkBox}>Insights</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  steps: {
    borderStyle: "solid",
    borderColor: "grey",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
  },
  center: {
    alignSelf: "center",
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  linkBox: {
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderColor: "grey",
    borderWidth: 1,
    fontWeight: "bold",
  },
});

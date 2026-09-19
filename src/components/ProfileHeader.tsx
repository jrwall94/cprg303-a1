import { Image, StyleSheet, Text, View } from "react-native";

export function ProfileHeader() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topBar}>
        <Text style={styles.backButton}>{"<"}</Text>
        <View style={styles.centerContainer}>
          <Text style={styles.subTitle}>OOTD_EVERYDAY</Text>
          <Text style={styles.mainTitle}>Posts</Text>
        </View>
      </View>
      <View style={styles.userRow}>
        <View style={styles.userInfoLeft}>
          <Image
            source={require("../assets/avatar.jpg")}
            style={styles.image}
          />
          <View>
            <Text style={styles.username}>ootd_everyday</Text>
            <Text style={styles.subText}>via frenchie_fry39</Text>
          </View>
        </View>
        <Text style={styles.menuButton}>...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#c1bbbb",
  },
  topBar: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backButton: {
    position: "absolute",
    left: 16,
    fontSize: 36,
    fontWeight: "bold",
    color: "#100d0d",
  },
  centerContainer: {
    alignItems: "center",
  },
  subTitle: {
    fontSize: 10,
    color: "#888",
  },
  mainTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#100d0d",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  userInfoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#100d0d",
  },
  subText: {
    fontSize: 11,
    color: "#888",
  },
  menuButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#100d0d",
  },
});

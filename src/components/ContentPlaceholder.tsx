import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, View } from "react-native";

export function ContentPlaceholder() {
  return (
    <View style={styles.container}>
      <View style={styles.postImageWrap}>
        <Image
          source={require("../assets/post.jpg")}
          style={styles.postImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.actions}>
        <View style={styles.actionsLeft}>
          <Ionicons name="heart-outline" size={26} color="#100d0d" />
          <Ionicons name="chatbubble-outline" size={24} color="#100d0d" />
          <Ionicons name="paper-plane-outline" size={24} color="#100d0d" />
        </View>
        <Ionicons name="bookmark-outline" size={26} color="#100d0d" />
      </View>

      <View style={styles.likedRow}>
        <View style={styles.likedAvatars}>
          <Image
            source={require("../assets/avatar.jpg")}
            style={styles.tinyAvatar}
          />
          <Image
            source={require("../assets/post.jpg")}
            style={[styles.tinyAvatar, styles.tinyAvatarOverlap]}
          />
        </View>
        <Text style={styles.likedText}>
          Liked by <Text style={styles.bold}>paisley.print.48</Text> and{" "}
          <Text style={styles.bold}>7 others frenchie_fry39</Text> Fresh shot on
          a sunny day!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  postImageWrap: {
    width: "100%",
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  actionsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  likedRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  likedAvatars: {
    flexDirection: "row",
    marginRight: 8,
  },
  tinyAvatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#fff",
  },
  tinyAvatarOverlap: {
    marginLeft: -6,
  },
  likedText: {
    flex: 1,
    fontSize: 13,
    color: "#100d0d",
  },
  bold: {
    fontWeight: "bold",
    color: "#100d0d",
  },
});

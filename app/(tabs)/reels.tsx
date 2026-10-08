import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { getPostImage } from "../../constants/postImages";
import s from "../../constants/reelsStyles";
import { posts } from "../../data/post";

export default function ReelsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={s.page}>
      <Text style={s.title}>Reels</Text>
      {posts.map((post) => (
        <Pressable
          key={post.id}
          style={s.reel}
          onPress={() =>
            router.push({
              pathname: "/post/[id]",
              params: { id: post.id },
            })
          }
        >
          <Image
            source={getPostImage(post.id)}
            style={s.video}
            resizeMode="cover"
          />
          <View style={s.overlay}>
            <View style={s.meta}>
              <Text style={s.username}>{post.username}</Text>
              <Text style={s.caption}>{post.caption}</Text>
            </View>
            <View style={s.sideIcons}>
              <Ionicons name="heart-outline" size={28} color="#fff" />
              <Ionicons name="chatbubble-outline" size={26} color="#fff" />
              <Ionicons name="paper-plane-outline" size={26} color="#fff" />
            </View>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

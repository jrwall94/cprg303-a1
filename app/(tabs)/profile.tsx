import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { getPostImage } from "../../constants/postImages";
import s from "../../constants/profileStyles";
import { posts } from "../../data/post";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={s.page}>
      <View style={s.header}>
        <Image
          source={require("../../assets/images/avatar.jpg")}
          style={s.avatar}
        />
        <View>
          <Text style={s.name}>Beautify</Text>
          <Text style={s.stats}>
            {posts.length} posts · 120 followers
          </Text>
        </View>
      </View>
      <View style={s.grid}>
        {posts.map((post) => (
          <Pressable
            key={post.id}
            style={s.gridItem}
            onPress={() =>
              router.push({
                pathname: "/post/[id]",
                params: { id: post.id },
              })
            }
          >
            <Image
              source={getPostImage(post.id)}
              style={s.gridImage}
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

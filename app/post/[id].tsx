import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import PostDetailView from "../../components/PostDetailView";
import s from "../../constants/postDetailStyles";
import { posts } from "../../data/post";

export default function PostScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const post = posts.find((item) => item.id === id);

  if (!post) {
    return (
      <View style={s.notFound}>
        <Text>Post not found</Text>
      </View>
    );
  }

  return (
    <PostDetailView
      id={post.id}
      username={post.username}
      via={post.via}
      caption={post.caption}
      likes={post.likes}
    />
  );
}

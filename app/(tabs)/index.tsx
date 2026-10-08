import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import PostCard from "../../components/PostCard";
import s from "../../constants/homeStyles";
import { posts } from "../../data/post";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={s.page}>
      <Text style={s.title}>Instagram</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PostCard
            id={item.id}
            username={item.username}
            caption={item.caption}
            likes={item.likes}
            onPress={() =>
              router.push({
                pathname: "/post/[id]",
                params: { id: item.id },
              })
            }
          />
        )}
      />
    </View>
  );
}

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import PostCard from "../../components/PostCard";
import s from "../../constants/searchStyles";
import { posts } from "../../data/post";

export default function SearchScreen() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const result = posts.filter((post) => {
    const text = (post.username + post.caption).toLowerCase();
    return text.includes(keyword.toLowerCase());
  });

  return (
    <View style={s.page}>
      <View style={s.titleRow}>
        <Ionicons name="search" size={22} color="#100d0d" />
        <Text style={s.title}>Search</Text>
      </View>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Search username or caption"
        style={s.input}
      />
      <FlatList
        data={result}
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

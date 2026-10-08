// File Location: components/PostDetailView.tsx

import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, View } from "react-native";
import { getPostImage } from "../constants/postImages";
import s from "../constants/postDetailStyles";

interface PostDetailViewProps {
  id: string;
  username: string;
  via: string;
  caption: string;
  likes: string;
}

export default function PostDetailView({
  id,
  username,
  via,
  caption,
  likes,
}: PostDetailViewProps) {
  return (
    <View style={s.container}>
      <View style={s.userRow}>
        <Image
          source={require("../assets/images/avatar.jpg")}
          style={s.avatar}
        />
        <View>
          <Text style={s.username}>{username}</Text>
          <Text style={s.via}>via {via}</Text>
        </View>
      </View>
      <Image
        source={getPostImage(id)}
        style={s.image}
        resizeMode="cover"
      />
      <View style={s.actions}>
        <View style={s.actionsLeft}>
          <Ionicons name="heart-outline" size={26} color="#100d0d" />
          <Ionicons name="chatbubble-outline" size={24} color="#100d0d" />
          <Ionicons name="paper-plane-outline" size={24} color="#100d0d" />
        </View>
        <Ionicons name="bookmark-outline" size={26} color="#100d0d" />
      </View>
      <Text style={s.likes}>{likes}</Text>
      <Text style={s.caption}>
        <Text style={s.username}>{username} </Text>
        {caption}
      </Text>
    </View>
  );
}

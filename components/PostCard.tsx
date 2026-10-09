// File Location: components/PostCard.tsx

import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import s from "../constants/postCardStyles";
import { getPostImage } from "../constants/postImages";

interface PostCardProps {
  id: string;
  username: string;
  caption: string;
  likes: string;
  onPress: () => void;
}

export default function PostCard({
  id,
  username,
  caption,
  likes,
  onPress,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={s.card}>
      <Pressable onPress={onPress}>
        <View style={s.userRow}>
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={s.avatar}
          />
          <Text style={s.username}>{username}</Text>
        </View>
        <Image
          source={getPostImage(id)}
          style={s.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={s.actions}>
        <Pressable style={s.iconBtn} onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "#ed4956" : "#100d0d"}
          />
        </Pressable>
        <Pressable style={s.iconBtn}>
          <Ionicons name="chatbubble-outline" size={22} color="#100d0d" />
        </Pressable>
        <Pressable style={s.iconBtn}>
          <Ionicons name="paper-plane-outline" size={22} color="#100d0d" />
        </Pressable>
      </View>
      <Text style={s.likes}>{likes}</Text>
      <Text style={s.caption}>
        <Text style={s.username}>{username} </Text>
        {caption}
      </Text>
    </View>
  );
}

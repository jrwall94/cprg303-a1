// File Location: components/ProductCard.tsx

import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, Text, View } from "react-native";
import { getPostImage } from "../constants/postImages";
import s from "../constants/productCardStyles";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  onPress: () => void;
}

export default function ProductCard({
  id,
  name,
  price,
  onPress,
}: ProductCardProps) {
  return (
    <Pressable onPress={onPress} style={s.card}>
      <Image
        source={getPostImage(id)}
        style={s.image}
        resizeMode="cover"
      />
      <Text style={s.name}>{name}</Text>
      <View style={s.priceRow}>
        <Text style={s.price}>{price}</Text>
        <Ionicons name="bag-outline" size={18} color="#100d0d" />
      </View>
    </Pressable>
  );
}

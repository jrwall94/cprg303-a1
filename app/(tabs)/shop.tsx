import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import s from "../../constants/shopStyles";
import { products } from "../../data/products";

export default function ShopScreen() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  const result = products.filter((product) => {
    return product.name.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <View style={s.page}>
      <View style={s.titleRow}>
        <Ionicons name="storefront" size={22} color="#100d0d" />
        <Text style={s.title}>Shop</Text>
      </View>
      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Search items"
        style={s.input}
      />
      <FlatList
        data={result}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={s.list}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            name={item.name}
            price={item.price}
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

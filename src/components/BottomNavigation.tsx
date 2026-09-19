import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from "react-native";

interface BottomNavigationProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  { key: "home", icon: "home", outline: "home-outline" },
  { key: "search", icon: "search", outline: "search-outline" },
  { key: "reels", icon: "film", outline: "film-outline" },
  { key: "shop", icon: "bag-handle", outline: "bag-handle-outline" },
  { key: "profile", icon: "person-circle", outline: "person-circle-outline" },
] as const;

export function BottomNavigation({
  activeTab,
  onChange,
}: BottomNavigationProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <Pressable
          key={tab.key}
          style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
          onPress={() => onChange(tab.key)}
        >
          <Ionicons
            name={activeTab === tab.key ? tab.icon : tab.outline}
            size={26}
            color="#100d0d"
          />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderTopColor: "#dbdbdb",
    backgroundColor: "#fff",
    paddingVertical: 10,
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  itemPressed: {
    opacity: 0.6,
  },
});

import { SymbolView } from "expo-symbols";
import { StyleSheet, View } from "react-native";

export function BottomSocial() {
  return (
    <View style={styles.container}>
      <SymbolView
        name={{ android: "favorite", web: "favorite" }}
        size={30}
        tintColor="black"
      />
      <SymbolView
        name={{ android: "mode_comment", web: "mode_comment" }}
        size={30}
        tintColor="black"
      />
      <SymbolView
        name={{ android: "send", web: "send" }}
        size={30}
        tintColor="black"
      />
      <SymbolView
        style={styles.finalItem}
        name={{ android: "bookmark", web: "bookmark" }}
        size={30}
        tintColor="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
    gap: 15,
  },
  finalItem: {
    marginLeft: "auto",
  },
});

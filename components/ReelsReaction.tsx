import { SymbolView } from "expo-symbols";
import { StyleSheet, Text, View } from "react-native";
export function ReelsReaction() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <SymbolView
          name={{ ios: "info.circle", android: "favorite", web: "favorite" }}
          tintColor="#E0E0E0"
        />
        <SymbolView
          name={{ ios: "info.circle", android: "comment", web: "comment" }}
          tintColor="#E0E0E0"
        />
        <SymbolView
          name={{ ios: "info.circle", android: "send", web: "send" }}
          tintColor="#E0E0E0"
        />
        <SymbolView
          name={{
            ios: "info.circle",
            android: "more_horiz",
            web: "more_horiz",
          }}
          tintColor="#E0E0E0"
        />
      </View>
      <View style={styles.subcontainer2}>
        <SymbolView
          name={{ ios: "info.circle", android: "favorite", web: "favorite" }}
          tintColor="#E0E0E0"
          size={15}
        />
        <Text style={styles.text}>6500</Text>
        <SymbolView
          name={{ ios: "info.circle", android: "comment", web: "comment" }}
          tintColor="#E0E0E0"
          size={15}
        />
        <Text style={styles.text}>75</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flex: 1,
  },
  subcontainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-end",
    flex: 1,
    marginLeft: 10,
  },
  subcontainer2: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 20,
  },
  text: { color: "#E0E0E0", fontSize: 12, fontWeight: "thin" },
});

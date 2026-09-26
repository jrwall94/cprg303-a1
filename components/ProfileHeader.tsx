import { SymbolView } from "expo-symbols";
import { Image, StyleSheet, Text, View } from "react-native";

export function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/beech5.jpg")}
        style={styles.profilePic}
      />
      <View>
      <Text style={styles.bold}>daily_outfit</Text>
      <Text style={styles.subtitle}>via street_style</Text>
      </View>
      <SymbolView
        name={{ ios: "ellipsis", android: "more_horiz", web: "more_horiz" }}
        size={20}
        tintColor="black"
        style={styles.finalItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  finalItem: {
    marginLeft: "auto",
    marginTop: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
    fontSize: 13,
  },

});

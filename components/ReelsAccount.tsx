import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
export function ReelsAccount() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/reelsProfilePic.jpg")}
        style={styles.image}
      />
      <Text style={styles.text}>User Account</Text>
      <Text style={styles.text}> - </Text>
      <Text style={styles.text}>Follow</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    flex: 1,
    marginTop: 500,
  },
  text: {
    color: "#F7F7F7",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});

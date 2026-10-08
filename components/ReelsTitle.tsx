import { StyleSheet, Text, View } from "react-native";

export function ReelsTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reels</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "#F7F7F7",
    paddingLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
});

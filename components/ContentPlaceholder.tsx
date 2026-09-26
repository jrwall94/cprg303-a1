import { Image, StyleSheet } from "react-native";

export function ContentPlaceholder() {
  return (
    <Image
      source={require("../assets/images/beech3.jpg")}
      style={styles.photo}
    />
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 432,
    width: 412,
    borderRadius: 6,
  },
});

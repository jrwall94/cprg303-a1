import { Image } from "expo-image";
import { StyleSheet } from "react-native";
export function ReelsImage() {
  return (
    <Image
      source={require("../assets/images/ReelsPhoto.jpg")}
      style={styles.backgroundImage}
      contentFit="cover"
      transition={300}
    />
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFill,
  },
});

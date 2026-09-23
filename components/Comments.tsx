import { SymbolView } from "expo-symbols";
import { StyleSheet, Text, View } from "react-native";

export function Comments() {
  return (
    <View style={styles.container}>
      <View style={styles.likes}>
        <SymbolView
          name={{
            ios: "person.crop.circle",
            android: "face",
            web: "face",
          }}
          tintColor="black"
          size={15}
        />
        <SymbolView
          name={{ ios: "person.fill", android: "face_3", web: "face_3" }}
          tintColor="black"
          size={15}
        />
        <SymbolView
          name={{ ios: "person.crop.circle", android: "face_6", web: "face_6" }}
          tintColor="black"
          size={15}
        />
        <Text style={styles.likedBy}>
          Liked by <Text style={styles.bold}>paisley.print.48</Text> and{" "}
          <Text style={styles.bold}>7 others</Text>
        </Text>
      </View>
      <Text>
        <Text style={styles.bold}>frenchie_fry39 </Text>Fresh shot on a sunny
        day! ☀️
      </Text>
      <Text style={styles.faded}>View all 12 comments</Text>
      <Text>
        <Text style={styles.bold}>lil_wyatt838 </Text>Awesome tones
      </Text>
      <Text>
        <Text style={styles.bold}>pia.in.a.pod </Text>Gorg. Love it! ❤️
      </Text>
      <Text style={styles.faded}>1 day ago</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    gap: 3,
  },
  likes: {
    flexDirection: "row",
  },
  bold: {
    fontWeight: "bold",
  },
  likedBy: {
    marginLeft: 10,
  },
  faded: {
    color: "grey",
  },
});

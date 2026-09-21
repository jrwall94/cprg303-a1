import { Text, View } from "@/components/Themed";
import { SymbolView } from "expo-symbols";
import { Image, StyleSheet } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/Default_pfp.jpg")}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.title}>name</Text>
          <Text style={styles.subtitle}>via othername</Text>
        </View>
        <SymbolView
          style={styles.headersymbol}
          name={{
            android: "more_horiz",
            web: "more_horiz",
          }}
          tintColor="#000000"
        />
      </View>
      <View style={styles.imagecontainer}>
        <Image
          source={require("../assets/images/image3.jpg")}
          style={styles.mainimage}
        />
      </View>
      <View style={styles.subcontainer2}>
        <SymbolView
          name={{
            android: "favorite",
            web: "favorite",
          }}
          tintColor="#000000"
          size={25}
        />
        <SymbolView
          name={{
            android: "comment",
            web: "comment",
          }}
          tintColor="#000000"
          size={25}
        />
        <SymbolView
          name={{
            android: "send",
            web: "send",
          }}
          tintColor="#000000"
          size={25}
        />
        <SymbolView
          name={{
            android: "bookmark",
            web: "bookmark",
          }}
          tintColor="#000000"
          size={25}
          style={{ marginLeft: 250 }}
        />
      </View>
      <View style={styles.commentsection}>
        <Text>
          Liked by <Text style={{ fontWeight: "bold" }}>Person</Text> and 7{" "}
          <Text style={{ fontWeight: "bold" }}>Others</Text>
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>Username</Text> Fresh shot on a
          sunny day!
        </Text>
        <Text style={styles.commenttextsmall}>view all 12 comments</Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>comment person</Text> Awesome
          tones
        </Text>
        <Text>
          <Text style={{ fontWeight: "bold" }}>comment Person</Text> Gorg. Love
          it!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    textAlign: "left",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },
  subcontainer: {
    paddingRight: 50,

    height: 50,
    width: "100%",
    alignContent: "center",
    paddingLeft: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  subcontainer2: {
    height: 50,
    width: "100%",
    alignContent: "center",
    paddingLeft: 10,
    paddingTop: 10,
    gap: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  textcontainer: {
    justifyContent: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  headersymbol: {
    alignSelf: "center",
    marginLeft: 240,
  },
  mainimage: {
    height: 400,
    width: 420,
  },
  imagecontainer: {
    alignItems: "center",
  },
  leftsymbol: {
    justifyContent: "flex-end",
  },
  commentsection: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    flex: 1,
    width: "100%",
    paddingLeft: 10,
    gap: 5,
  },
  commenttext: {},
  commenttextsmall: {
    color: "#828282",
    fontSize: 12,
  },
});

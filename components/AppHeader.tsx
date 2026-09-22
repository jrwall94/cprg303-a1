import { SymbolView } from "expo-symbols";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function AppHeader() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <SymbolView
        name={{ android: "chevron_backward", web: "chevron_backward" }}
        size={40}
        tintColor="black"
      />
      <View style={[styles.subContainer]}>
        <Text style={styles.profile}>OOTD_EVERYDAY</Text>
        <Text style={styles.title}>Posts</Text>
      </View>
      <View style={styles.spacer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 2,
    borderBottomWidth: 0.5,
    flexDirection: "row",
  },
  subContainer: {
    flexDirection: "column",
    margin: "auto",
  },
  spacer: {
    width: 40,
  },
  profile: {
    fontSize: 12,
    color: "grey",
    margin: "auto",
    fontWeight: "bold",
  },
  title: {
    fontWeight: 900,
    margin: "auto",
  },
});

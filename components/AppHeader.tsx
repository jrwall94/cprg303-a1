import { SymbolView } from "expo-symbols";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function AppHeader() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.center}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <SymbolView
          name={{
            ios: "chevron.left",
            android: "chevron_backward",
            web: "chevron_backward",
          }}
          size={Platform.select({ ios: 30, android: 40, web: 40 })}
          tintColor="black"
        />
        <View style={[styles.subContainer]}>
          <Text style={styles.profile}>OOTD_EVERYDAY</Text>
          <Text style={styles.title}>Posts</Text>
        </View>
        <View style={styles.spacer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
  container: {
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    width: "100%",
    ...Platform.select({
      web: {
        width: 412,
      },
    }),
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

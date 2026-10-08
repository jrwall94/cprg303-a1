import { ReelsAccount } from "@/components/ReelsAccount";
import { ReelsImage } from "@/components/ReelsImage";
import { ReelsReaction } from "@/components/ReelsReaction";
import { ReelsTitle } from "@/components/ReelsTitle";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function () {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" animated={true} />
      <ReelsImage />
      <View style={styles.overlay}>
        <ReelsTitle />
        <ReelsAccount />
        <ReelsReaction />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
});

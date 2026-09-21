import { Text, View } from "@/components/Themed";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";
import { StyleSheet } from "react-native";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "home",
                web: "home",
              }}
              tintColor="#000000"
              size={28}
            />
          ),
          headerLeft: () => (
            <View>
              <SymbolView
                name={{
                  android: "keyboard_arrow_left",
                  web: "keyboard_arrow_left",
                }}
                tintColor="#000000"
                size={50}
              />
            </View>
          ),
          headerTitle: () => (
            <View style={styles.container}>
              <Text style={styles.subheader}>OOTD_EVERYDAY</Text>
              <Text style={styles.header}>Posts</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "search",
                web: "search",
              }}
              tintColor="#000000"
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "play_circle",
                web: "play_circle",
              }}
              tintColor="#000000"
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "shopping_bag",
                web: "shopping_bag",
              }}
              tintColor="#000000"
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <SymbolView
              name={{
                ios: "chevron.left.forwardslash.chevron.right",
                android: "account_circle",
                web: "account_circle",
              }}
              tintColor="#000000"
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 50,
  },
  header: {
    fontWeight: "900",
    fontSize: 15,
  },
  subheader: {
    fontWeight: "100",
  },
});

import { AppHeader } from "@/components/AppHeader";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";

import { ShopHeader } from "@/components/ShopHeader";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#f75959",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          ...Platform.select({
            web: {
              height: 50,
              width: 412,
              alignSelf: "center",
            },
            ios: {
              height: 100,
              paddingTop: 7,
            },
            android: {
              height: 100,
              paddingTop: 7,
            },
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <AppHeader />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: "Reels",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam" size={size} color={color} />
          ),
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
            height: 100,
            paddingTop: 7,
          },
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          header: () => <ShopHeader />,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bag-handle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

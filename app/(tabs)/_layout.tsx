import { AppHeader } from "@/components/AppHeader";
import { Tabs } from "expo-router";
import { SymbolView } from "expo-symbols";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: useClientOnlyValue(false, true),
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          paddingTop: 7,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <AppHeader />,
          tabBarIcon: () => (
            <SymbolView
              name={{
                ios: "house",
                android: "home",
                web: "home",
              }}
              tintColor="black"
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: () => (
            <SymbolView
              name={{
                ios: "magnifyingglass",
                android: "search",
                web: "search",
              }}
              tintColor="black"
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="media"
        options={{
          title: "Media",
          tabBarIcon: () => (
            <SymbolView
              name={{
                ios: "play.rectangle.on.rectangle",
                android: "smart_display",
                web: "smart_display",
              }}
              tintColor="black"
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: "Shop",
          tabBarIcon: () => (
            <SymbolView
              name={{
                ios: "bag",
                android: "shopping_bag",
                web: "shopping_bag",
              }}
              tintColor="black"
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <SymbolView
              name={{
                ios: "person.crop.circle.fill",
                android: "account_circle",
                web: "account_circle",
              }}
              tintColor="black"
              size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}

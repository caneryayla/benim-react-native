import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/COLOR";

export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true, headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Ana Sayfa",
          tabBarLabelStyle: { color: COLORS.marketin.backgroundColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={
                focused
                  ? COLORS.marketin.tabIconFocusColor
                  : COLORS.marketin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: "Favorilerim",
          tabBarLabelStyle: { color: COLORS.marketin.backgroundColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={27}
              color={
                focused
                  ? COLORS.marketin.tabIconFocusColor
                  : COLORS.marketin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopbag"
        options={{
          tabBarLabel: "Sepetim",
          tabBarLabelStyle: { color: COLORS.marketin.backgroundColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "basket" : "basket-outline"}
              size={28}
              color={
                focused
                  ? COLORS.marketin.tabIconFocusColor
                  : COLORS.marketin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: "Siparişlerim",
          tabBarLabelStyle: { color: COLORS.marketin.backgroundColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "reader" : "reader-outline"}
              size={24}
              color={
                focused
                  ? COLORS.marketin.tabIconFocusColor
                  : COLORS.marketin.tabIconColor
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

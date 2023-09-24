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
          tabBarLabelStyle: { color: COLORS.biletin.backgroundColor2 },

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={
                focused
                  ? COLORS.biletin.tabIconFocusColor
                  : COLORS.biletin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: "Favorilerim",
          tabBarLabelStyle: { color: COLORS.biletin.backgroundColor2 },

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={27}
              color={
                focused
                  ? COLORS.biletin.tabIconFocusColor
                  : COLORS.biletin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopbag"
        options={{
          tabBarLabel: "Sepetim",
          tabBarLabelStyle: { color: COLORS.biletin.backgroundColor2 },

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "basket" : "basket-outline"}
              size={28}
              color={
                focused
                  ? COLORS.biletin.tabIconFocusColor
                  : COLORS.biletin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: "Biletlerim",
          tabBarLabelStyle: { color: COLORS.biletin.backgroundColor2 },

          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "musical-notes-outline" : "musical-notes-outline"}
              size={24}
              color={
                focused
                  ? COLORS.biletin.tabIconFocusColor
                  : COLORS.biletin.tabIconColor
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

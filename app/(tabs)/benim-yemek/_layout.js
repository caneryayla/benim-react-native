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
          tabBarLabelStyle: { color: COLORS.yemegin.tabIconFocusColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={
                focused
                  ? COLORS.yemegin.tabIconFocusColor
                  : COLORS.yemegin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="campaing"
        options={{
          tabBarLabel: "Kampanyalar",
          tabBarLabelStyle: { color: COLORS.yemegin.tabIconFocusColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "gift" : "gift-outline"}
              size={27}
              color={
                focused
                  ? COLORS.yemegin.tabIconFocusColor
                  : COLORS.yemegin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shopbag"
        options={{
          tabBarLabel: "Sepetim",
          tabBarLabelStyle: { color: COLORS.yemegin.tabIconFocusColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "basket" : "basket-outline"}
              size={28}
              color={
                focused
                  ? COLORS.yemegin.tabIconFocusColor
                  : COLORS.yemegin.tabIconColor
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarLabel: "Siparişlerim",
          tabBarLabelStyle: { color: COLORS.yemegin.tabIconFocusColor },
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "reader" : "reader-outline"}
              size={24}
              color={
                focused
                  ? COLORS.yemegin.tabIconFocusColor
                  : COLORS.yemegin.tabIconColor
              }
            />
          ),
        }}
      />
    </Tabs>
  );
};

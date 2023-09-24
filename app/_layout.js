import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./redux";

const StackLayout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="event-details" />
        <Stack.Screen name="home" />
        <Stack.Screen name="login" />
        <Stack.Screen name="noLoginProfile" />

        <Stack.Screen name="profile-addres-information" />
        <Stack.Screen name="profile-email-change" />
        <Stack.Screen name="profile-general-information" />
        <Stack.Screen name="profile-password-change" />
        <Stack.Screen name="profile-registered-cards" />
        <Stack.Screen name="profile" />

        <Stack.Screen name="my-tickets" />

        <Stack.Screen name="market-details" />
        <Stack.Screen name="market-product-details" />
        <Stack.Screen name="market-order-detail" />

        <Stack.Screen name="tekno-product-details" />
        <Stack.Screen name="tekno-category-details" />
        <Stack.Screen name="tekno-details" />
        <Stack.Screen name="tekno-order-detail" />

        <Stack.Screen name="yemek-product-details" />
        <Stack.Screen name="yemek-category-details" />
        <Stack.Screen name="yemek-details" />
        <Stack.Screen name="yemek-order-detail" />

        <Stack.Screen
          name="(tabs)/benim-market"
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="(tabs)/benim-yemek"
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="(tabs)/benim-bilet"
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="(tabs)/benim-teknolojim"
          options={{ animation: "slide_from_bottom" }}
        />
      </Stack>
    </Provider>
  );
};

export default StackLayout;

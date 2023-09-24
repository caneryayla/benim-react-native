import { Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import marketProductData from "../app/data/marketProducts.json";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MarketProductDetails = () => {
  const { id } = useLocalSearchParams();
  const marketProductsData = marketProductData.find((item) => item?.id == id);

  const addToCart = () => {
    alert("Sepete Eklendi");
  };

  const [heart, setHeart] = useState(false);

  const likePress = () => {
    setHeart(!heart);
  };

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <View paddingT-65>
        <Text>{""}</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "30%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "90%", objectFit: "contain" }}
          source={{ uri: marketProductsData?.image }}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: "45%",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontWeight: 600,
            fontSize: hp("1.8"),
            paddingBottom: 10,
            marginTop: 10,
          }}
        >
          {marketProductsData?.desc
            ? marketProductsData?.desc
            : marketProductsData?.name}
        </Text>
        <Text style={{ fontWeight: 300, fontSize: hp("2.5") }}>
          {marketProductsData?.price} ₺
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "10%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={addToCart}
          style={{
            width: "50%",
            height: "50%",
            backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{ fontWeight: 600, color: "white", fontSize: hp("2.3") }}
          >
            Sepete Ekle
          </Text>
        </TouchableOpacity>
      </View>

      <TitleHeader
        onPress={likePress}
        heart={heart ? "heart" : "heart-outline"}
        goBack
      />
    </View>
  );
};

export default MarketProductDetails;

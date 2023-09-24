import { Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import yemekProductData from "./data/yemekProducts.json";
import magazaProductData from "./data/yemek.json";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const YemekProductDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const yemekProductsData = yemekProductData.find((item) => item?.id == id);

  const magazaProductsData = magazaProductData.find(
    (item) => item?.id == yemekProductsData.marka_id
  );

  const goMarka = () => {
    router.push({
      pathname: "/yemek-details",
      params: { id: magazaProductsData.id },
    });
  };

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
          source={{ uri: yemekProductsData?.image }}
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
        <View row>
          <Text
            style={{
              fontWeight: 700,
              fontSize: hp("1.8"),
              paddingBottom: 12,
              marginTop: 10,
            }}
            onPress={goMarka}
          >
            {magazaProductsData.name}{" "}
          </Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: hp("1.8"),
              paddingBottom: 12,
              marginTop: 10,
            }}
          >
            {yemekProductsData?.name}
          </Text>
        </View>

        <Text
          style={{
            fontWeight: 600,
            fontSize: hp("1.8"),
            padding: 6,
            borderWidth: 0.7,
            borderColor: "black",
            borderRadius: 15,
            marginBottom: 10,
            display: yemekProductsData?.size ? "flex" : "none",
          }}
        >
          {yemekProductsData?.size ? yemekProductsData?.size : ""}
        </Text>
        <Text style={{ marginLeft: 5, fontWeight: 600, fontSize: hp("2.5") }}>
          {new Intl.NumberFormat({
            style: "currency",
            currency: "TRY",
            maximumFractionDigits: 0,
          }).format(yemekProductsData?.price)}{" "}
          ₺
        </Text>
        <Text>{yemekProductsData.desc}</Text>
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
            backgroundColor: "red",
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

export default YemekProductDetails;

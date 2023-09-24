import { Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import teknoProductData from "../app/data/teknolojimProducts.json";
import markaProductData from "../app/data/teknolojim.json";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const TeknoProductDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const teknoProductsData = teknoProductData.find((item) => item?.id == id);

  const markaProductsData = markaProductData.find(
    (item) => item?.id == teknoProductsData.marka_id
  );

  const goMarka = () => {
    router.push({
      pathname: "/tekno-details",
      params: { id: markaProductsData.id },
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
          source={{ uri: teknoProductsData?.image }}
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
            {markaProductsData.name}{" "}
          </Text>
          <Text
            style={{
              fontWeight: 500,
              fontSize: hp("1.8"),
              paddingBottom: 12,
              marginTop: 10,
            }}
          >
            {teknoProductsData?.name}
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
            display: teknoProductsData?.size ? "flex" : "none",
          }}
        >
          {teknoProductsData?.size ? teknoProductsData?.size : ""}
        </Text>
        <Text style={{ marginLeft: 5, fontWeight: 600, fontSize: hp("2.5") }}>
          {new Intl.NumberFormat({
            style: "currency",
            currency: "TRY",
            maximumFractionDigits: 0,
          }).format(teknoProductsData?.price)}{" "}
          ₺
        </Text>
        <Text>{teknoProductsData.desc}</Text>
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

export default TeknoProductDetails;

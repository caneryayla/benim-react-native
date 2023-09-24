import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { Image, ScrollView, FlatList } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import yemekData from "../../data/yemek.json";

import yemekProducts from "../../data/yemekProducts.json";
import { useRouter } from "expo-router";

const YemekCard = ({ item, kategoriiD, kategoriAdi, kategoriImg }) => {
  const [isCardVisible, setCardVisible] = useState(true);

  const toggleCard = () => {
    setCardVisible(!isCardVisible);
  };

  const router = useRouter();

  const yemekProduct = yemekProducts?.filter(
    (yemek) => yemek.kategoriId == item?.kategoriId
  );

  const goCategoryDetail = () => {
    router.push({
      pathname: "/yemek-category-details",
      params: { id: kategoriiD },
    });
  };

  return (
    <TouchableOpacity
      onPress={goCategoryDetail}
      style={{
        width: 110,
        height: hp("15"),
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 7,
        borderRadius: 10,
      }}
    >
      <Image
        resizeMode="cover"
        style={{
          width: "95%",
          height: "75%",
          borderRadius: 15,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          overflow: "hidden",
        }}
        source={{
          uri: kategoriImg,
        }}
      />

      <View
        style={{
          width: "95%",
          alignItems: "center",
          paddingTop: 5,
          paddingBottom: 5,
          borderWidth: 0.4,
          borderColor: "black",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text
          style={{ fontWeight: 600, fontSize: hp("1.8") }}
          numberOfLines={1}
        >
          {kategoriAdi}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default YemekCard;

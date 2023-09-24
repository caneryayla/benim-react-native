import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";

import YemekProductData from "./data/yemekProducts.json";
import YemekProductCard from "./components/yemek-cards/yemek-product-card";
import yemekData from "./data/yemek.json";

import TitleImageHeader from "./components/headers/title-img-header";

const YemekDetails = () => {
  const { id } = useLocalSearchParams();

  const yemek = yemekData.find((item) => item?.id == id);

  const yemekProductsData = YemekProductData?.filter(
    (item) => item.marka_id == id
  );

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <TitleImageHeader img={yemek?.logo} goBack title={yemek?.name} />

      <FlatList
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 25,
        }}
        numColumns={3}
        data={yemekProductsData}
        bounces={false}
        renderItem={({ item, index }) => (
          <YemekProductCard
            urun_adi={item.name}
            urun_img={item.image}
            urun_fiyat={item.price}
            id={item.id}
          />
        )}
      />
    </View>
  );
};

export default YemekDetails;

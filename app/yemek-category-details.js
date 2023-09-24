import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";

import YemekProductData from "./data/yemekProducts.json";

import YemekProductCard from "./components/yemek-cards/yemek-product-card";

import yemekCategoryData from "./data/yemekKategoriler.json";

const YemekCategoryDetails = () => {
  const { id } = useLocalSearchParams();

  const yemekKategoriData = yemekCategoryData.find((item) => item?.id == id);

  const yemekProductsData = YemekProductData?.filter(
    (item) => item.kategoriId == id
  );

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <FlatList
        contentContainerStyle={{
          paddingTop: 90,
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
      <TitleHeader goBack title={yemekKategoriData.kategoriName} />
    </View>
  );
};

export default YemekCategoryDetails;

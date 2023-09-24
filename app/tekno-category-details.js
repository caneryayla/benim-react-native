import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import TeknoProductData from "./data/teknolojimProducts.json";
import TeknoProductCard from "./components/tekno-cards/tekno-product-card";
import teknoCategoryData from "./data/teknolojimKategoriler.json";

const TeknoCategoryDetails = () => {
  const { id } = useLocalSearchParams();

  const teknoKategoriData = teknoCategoryData.find((item) => item?.id == id);

  const teknoProductsData = TeknoProductData?.filter(
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
        data={teknoProductsData}
        bounces={false}
        renderItem={({ item, index }) => (
          <TeknoProductCard
            urun_adi={item.name}
            urun_img={item.image}
            urun_fiyat={item.price}
            id={item.id}
          />
        )}
      />
      <TitleHeader goBack title={teknoKategoriData.kategoriName} />
    </View>
  );
};

export default TeknoCategoryDetails;

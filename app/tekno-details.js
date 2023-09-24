import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import TeknoProductData from "../app/data/teknolojimProducts.json";
import TeknoProductCard from "./components/tekno-cards/tekno-product-card";
import teknoData from "../app/data/teknolojim.json";
import TitleImageHeader from "./components/headers/title-img-header";

const TeknoDetails = () => {
  const { id } = useLocalSearchParams();

  const tekno = teknoData.find((item) => item?.id == id);

  const teknoProductsData = TeknoProductData?.filter(
    (item) => item.marka_id == id
  );

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <TitleImageHeader img={tekno?.logo} goBack title={tekno?.name} />

      <FlatList
        contentContainerStyle={{
          paddingTop: 20,
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
    </View>
  );
};

export default TeknoDetails;

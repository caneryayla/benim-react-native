import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import marketData from "../app/data/market.json";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import marketProductData from "../app/data/marketProducts.json";
import MarketProductCard from "./components/market-cards/market-product-card";

const MarketDetails = () => {
  const { id } = useLocalSearchParams();
  const market = marketData.find((item) => item?.id == id);

  const marketProductsData = marketProductData?.filter(
    (item) => item.market_id == id
  );

  return (
    <View backgroundColor="white">
      <FlatList
        contentContainerStyle={{ paddingTop: 85, paddingBottom: 20 }}
        numColumns={3}
        data={marketProductsData}
        bounces={false}
        renderItem={({ item, index }) => (
          <MarketProductCard
            urun_adi={item.name}
            urun_img={item.image}
            urun_fiyat={item.price}
            id={item.id}
          />
        )}
      />

      <TitleHeader goBack title={market?.name} />
    </View>
  );
};

export default MarketDetails;

import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";
import SearchInput from "../../components/inputs/search-input";
import marketData from "../../data/market.json";
import AdvertSliderCards from "../../components/advert-slider/advert-slider-cards";
import MarketCard from "../../components/market-cards/market-card";
import { useRouter } from "expo-router";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const BenimMarketHome = () => {
  const campaignMarketDatas = [
    {
      image:
        "https://www.bim.com.tr/uploads/markalar/main_Banner_Meyve-Sebze.jpg",
    },
    {
      image:
        "https://www.bim.com.tr/uploads/markalar/24-02-2023-16-19-31-WEB%20S%C4%B0TES%C4%B0%20S%C3%9CT%20VE%20S%C3%9CT%20%C3%9CR%C3%9CNLER%C4%B0%20copy.jpg",
    },
    {
      image:
        "https://www.bim.com.tr/uploads/markalar/main_Banner_F%C4%B1r%C4%B1n.jpg",
    },
    {
      image:
        "https://reimg-carrefour.mncdn.com/bannerimage/desk-3-al-2-ode-13-07-2023_0_MC/8852630241330.png",
    },
    {
      image:
        "https://reimg-carrefour.mncdn.com/bannerimage/desk-sakiz-11-16-072023_0_MC/8852618739762.png",
    },
  ];

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(marketData);

  const handleSearch = (text) => {
    setSearch(text);

    const filteredResults = marketData.filter((item) =>
      item.name?.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <View marginT-35 backgroundColor={COLORS.marketin.backgroundColor}>
        <Text>{""}</Text>
      </View>

      <View>
        <View marginT-45>
          <SearchInput
            color={COLORS.marketin.backgroundColor}
            value={search}
            onChange={handleSearch}
            placeholder={"Konser Ara.."}
          />
        </View>

        <AdvertSliderCards data={campaignMarketDatas} />
        <FlatList
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: wp("4"),
            paddingBottom: wp("84"),
          }}
          data={searchResults}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <MarketCard
              item={item}
              market_adi={item?.name}
              market_logo={item?.logo}
              market_yeri={item?.district}
              market_puan={item?.rating}
            />
          )}
        />
      </View>

      <MainHeader
        close
        backgroundColor={COLORS.marketin.backgroundColor}
        name="Marketim"
        logo={require("../../../assets/image/groceries.png")}
      />
    </View>
  );
};

export default BenimMarketHome;

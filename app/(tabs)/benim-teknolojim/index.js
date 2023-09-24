import { FlatList, Modal, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";
import SearchInput from "../../components/inputs/search-input";
import AdvertSliderCards from "../../components/advert-slider/advert-slider-cards";
import TeknoCard from "../../components/tekno-cards/tekno-card";
import teknoKategoriData from "../../data/teknolojimKategoriler.json";

const BenimTeknolojimHome = () => {
  const campaignMarketDatas = [
    {
      image:
        "https://images.hepsiburada.net/banners/s/0/960-352/banner_20220608143516.jpeg/format:webp",
    },
    {
      image:
        "https://images.hepsiburada.net/banners/s/0/960-352/banner_20230824143218.jpeg/format:webp",
    },
    {
      image:
        "https://images.hepsiburada.net/banners/s/0/960-352/banner_20230906091625.jpeg/format:webp",
    },
    {
      image:
        "https://images.hepsiburada.net/banners/s/0/960-352/banner_20230125143230.jpeg/format:webp",
    },
    {
      image:
        "https://images.hepsiburada.net/banners/s/0/960-352/banner_20221102182213.png/format:webp",
    },
    {
      image:
        "https://images.hepsiburada.net/banners/s/0/960-352/banner_20230214142954.jpeg/format:webp",
    },
  ];

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(teknoKategoriData);

  const handleSearch = (text) => {
    setSearch(text);

    const filteredResults = teknoKategoriData.filter((item) =>
      item.kategoriName?.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <View marginT-35 backgroundColor={COLORS.teknon.backgroundColor}>
        <Text>{""}</Text>
      </View>

      <View marginT-45>
        <SearchInput
          color={COLORS.teknon.backgroundColor}
          value={search}
          onChange={handleSearch}
          placeholder={"Kategori Ara.."}
        />
      </View>

      <AdvertSliderCards data={campaignMarketDatas} />

      <FlatList
        bounces={false}
        contentContainerStyle={{
          paddingBottom: 0,
        }}
        data={searchResults}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TeknoCard
            item={item}
            kategoriiD={item.kategoriId}
            kategoriAdi={item.kategoriName}
          />
        )}
      />

      <MainHeader
        close
        backgroundColor={COLORS.teknon.backgroundColor}
        name="Teknom"
        logo={require("../../../assets/image/tekno-img.png")}
      />
    </View>
  );
};

export default BenimTeknolojimHome;

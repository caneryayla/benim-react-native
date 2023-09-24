import { FlatList, Modal, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";
import SearchInput from "../../components/inputs/search-input";
import AdvertSliderCards from "../../components/advert-slider/advert-slider-cards";
import YemekCard from "../../components/yemek-cards/yemek-card";
import yemekKategoriData from "../../data/yemekKategoriler.json";
import yemekData from "../../data/yemek.json";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import YemekStoreCard from "../../components/yemek-cards/yemek-store-card";

const BenimYemekHome = () => {
  const campaignYemekDatas = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI08Y1SQPnNlkmhav7HVkyaHNrE5DB3YScEQ&usqp=CAU",
    },
    {
      image: "https://images.deliveryhero.io/image/fd-tr/LH/opp1-hero.jpg",
    },
    {
      image:
        "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdzQnbODtRmpwXoZGhqlQ5-0PahhL53ZTKJc4rrjyR58DIhPH4yBRWWxDRtaz_fQK0eY0&usqp=CAU",
    },
    {
      image:
        "https://media.istockphoto.com/id/1195774604/tr/foto%C4%9Fraf/cevizli-antep-f%C4%B1st%C4%B1%C4%9F%C4%B1-t%C3%BCrk-usul%C3%BC-antep-baklavas%C4%B1-sunusu-t%C3%BCrk-mutfa%C4%9F%C4%B1ndan-baklava.jpg?s=612x612&w=0&k=20&c=u-K1GP_8bUwQDbP7C_XiJ2-3gsheeOXNcTOAJEm044U=",
    },
  ];

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(yemekKategoriData);

  const handleSearch = (text) => {
    setSearch(text);

    const filteredResults = yemekKategoriData.filter((item) =>
      item.kategoriName?.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <View backgroundColor="white">
      <View marginT-35 backgroundColor={COLORS.yemegin.backgroundColor}>
        <Text>{""}</Text>
      </View>

      <View marginT-45>
        <SearchInput
          color={COLORS.yemegin.tabIconColor}
          value={search}
          onChange={handleSearch}
          placeholder={"Yemek Ara.."}
        />
      </View>

      <AdvertSliderCards data={campaignYemekDatas} />

      <Text
        style={{
          paddingLeft: 15,
          paddingBottom: 7,
          marginTop: -6,
          fontWeight: 600,
          fontSize: hp("2"),
        }}
      >
        Mutfaklar
      </Text>

      <FlatList
        contentContainerStyle={{
          paddingRight: 18,
          paddingLeft: 5,
          paddingBottom: wp("23"),
        }}
        horizontal
        data={searchResults}
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <YemekCard
            item={item}
            kategoriiD={item?.kategoriId}
            kategoriAdi={item?.kategoriName}
            kategoriImg={item?.kategoriImage}
          />
        )}
      />

      <FlatList
        data={yemekData}
        contentContainerStyle={{
          paddingHorizontal: wp("4"),
          paddingBottom: wp("143"),
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <YemekStoreCard
            item={item}
            mutfak_adi={item?.name}
            mutfak_logo={item?.logo}
            mutfak_yeri={item?.district}
            mutfak_puan={item?.rating}
          />
        )}
      />

      <MainHeader
        close
        backgroundColor={COLORS.yemegin.tabIconColor}
        name="Yemeğim"
        logo={require("../../../assets/image/burger.png")}
      />
    </View>
  );
};

export default BenimYemekHome;

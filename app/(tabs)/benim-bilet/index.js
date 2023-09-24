import { FlatList, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { View } from "react-native-ui-lib";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import EventCard from "../../components/ticket-cards/event-card";

import BiletData from "../../data/bilet.json";
import { useRouter } from "expo-router";
import SearchInput from "../../components/inputs/search-input";

const BenimMarketHome = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(BiletData);

  const handleSearch = (text) => {
    setSearch(text);

    const filteredResults = BiletData.filter((item) =>
      item.konser_adı.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <View flex backgroundColor="white">
      <View marginT-35 backgroundColor={COLORS.biletin.backgroundColor2}>
        <Text>{""}</Text>
      </View>

      <View>
        <View marginT-45 marginB-10>
          <SearchInput
            color={COLORS.biletin.backgroundColor2}
            value={search}
            onChange={handleSearch}
            placeholder={"Konser Ara.."}
          />
        </View>
        <FlatList
          bounces={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: 150,
          }}
          data={searchResults}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <EventCard
              item={item}
              name={item.konser_adı}
              date={item.tarih}
              city={item.şehir}
              time={item.saat}
              photo={item?.konser_img}
            />
          )}
        />
      </View>
      <MainHeader
        close
        backgroundColor={COLORS.biletin.backgroundColor2}
        name="Biletim"
        logo={require("../../../assets/image/voucher.png")}
      />
    </View>
  );
};

export default BenimMarketHome;

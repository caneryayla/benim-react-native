import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { Colors, View } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userSlice";
import NoLoginProfile from "../../noLoginProfile";

import teknoFavoritesData from "../../data/teknolojimFavoritesProduct.json";
import MarketFavoritesCard from "../../components/market-cards/market-favorites-card";
import TeknoFavoritesCard from "../../components/tekno-cards/tekno-favorites-card";
import GiftCard from "../../components/yemek-cards/gift-card";

const Campaing = () => {
  const user = useSelector((state) => state.userSlice.user);

  const campaingData = [
    {
      id: 1,
      baslık: "Pidem 2'li Fırsat Menü",
      mutfak_id: 7,
      image:
        "https://pidemstatik.kolay.site/content/content/img/PIDEM-FG5-APP-LEZZETLI-2'LIM-2491X826px.jpg",
    },
  ];

  return (
    <View>
      {user ? (
        <View width={"100%"} height={"100%"} backgroundColor="white">
          <View marginT-35 backgroundColor={COLORS.yemegin.backgroundColor}>
            <Text>{""}</Text>
          </View>

          <FlatList
            bounces={false}
            contentContainerStyle={{
              paddingBottom: 5,
              paddingTop: 45,
              paddingHorizontal: 15,
            }}
            data={campaingData}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <GiftCard
                item={item}
                baslık={item.baslık}
                kampanyaImg={item.image}
              />
            )}
          />

          <MainHeader
            close
            backgroundColor={"orange"}
            name="Yemeğim"
            logo={require("../../../assets/image/burger.png")}
          />
        </View>
      ) : (
        <View width={"100%"} height={"100%"}>
          <NoLoginProfile butonColor={COLORS.yemegin.tabIconColor} />
        </View>
      )}
    </View>
  );
};

export default Campaing;

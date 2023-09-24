import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userSlice";
import NoLoginProfile from "../../noLoginProfile";

import teknoFavoritesData from "../../data/teknolojimFavoritesProduct.json";
import MarketFavoritesCard from "../../components/market-cards/market-favorites-card";
import TeknoFavoritesCard from "../../components/tekno-cards/tekno-favorites-card";

const Favorites = () => {
  const user = useSelector((state) => state.userSlice.user);

  return (
    <View>
      {user ? (
        <View>
          <View marginT-35 backgroundColor={COLORS.teknon.backgroundColor}>
            <Text>{""}</Text>
          </View>

          <View width={"100%"} height={"100%"} backgroundColor="white">
            <FlatList
              bounces={false}
              numColumns={3}
              contentContainerStyle={{
                paddingBottom: 150,
                paddingTop: 50,
              }}
              data={teknoFavoritesData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TeknoFavoritesCard
                  marketId={item?.marka_id}
                  marketName={item?.markaName}
                  urunId={item?.urunId}
                  urun_img={item?.urunImage}
                  urunAdi={item?.urunAdi}
                  urunFiyat={item?.urunFiyati}
                />
              )}
            />
          </View>

          <MainHeader
            close
            backgroundColor={COLORS.teknon.backgroundColor}
            name="Teknom"
            logo={require("../../../assets/image/tekno-img.png")}
          />
        </View>
      ) : (
        <View width={"100%"} height={"100%"}>
          <NoLoginProfile butonColor={COLORS.teknon.backgroundColor} />
        </View>
      )}
    </View>
  );
};

export default Favorites;

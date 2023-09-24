import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userSlice";
import NoLoginProfile from "../../noLoginProfile";

import MarketFavoritesData from "../../data/marketFavoritesProduct.json";
import MarketFavoritesCard from "../../components/market-cards/market-favorites-card";

const Favorites = () => {
  const user = useSelector((state) => state.userSlice.user);

  return (
    <View>
      {user ? (
        <View>
          <View marginT-35 backgroundColor={COLORS.marketin.backgroundColor}>
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
              data={MarketFavoritesData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <MarketFavoritesCard
                  marketId={item?.marketId}
                  marketName={item?.marketName}
                  urunId={item?.urunId}
                  urun_img={item?.urunImage}
                  urunAdi={item?.urunAdi}
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
      ) : (
        <View width={"100%"} height={"100%"}>
          <NoLoginProfile butonColor={COLORS.marketin.backgroundColor} />
        </View>
      )}
    </View>
  );
};

export default Favorites;

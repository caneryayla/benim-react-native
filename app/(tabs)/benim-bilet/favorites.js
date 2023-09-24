import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducers/userSlice";
import NoLoginProfile from "../../noLoginProfile";

import BiletFavoriteData from "../../data/biletFavoritesProduct.json";
import BiletFavoritesCard from "../../components/ticket-cards/bilet-favorites-card";

const Favorites = () => {
  const user = useSelector((state) => state.userSlice.user);

  return (
    <View>
      {user ? (
        <View>
          <View marginT-35 backgroundColor={COLORS.biletin.backgroundColor2}>
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
              data={BiletFavoriteData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <BiletFavoritesCard
                  biletId={item?.biletId}
                  konserId={item?.konserId}
                  konserImage={item?.konser_img}
                  konserAdi={item?.konser_adı}
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
      ) : (
        <View width={"100%"} height={"100%"}>
          <NoLoginProfile butonColor={COLORS.biletin.backgroundColor2} />
        </View>
      )}
    </View>
  );
};

export default Favorites;

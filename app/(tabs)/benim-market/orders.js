import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";

import { useSelector } from "react-redux";
import NoLoginProfile from "../../noLoginProfile";

import MarketOrdersData from "../../data/marketOrders.json";
import MarketOrdersCard from "../../components/market-cards/market-orders-card";

const Orders = () => {
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
              contentContainerStyle={{
                paddingBottom: 150,
                paddingTop: 50,
                paddingHorizontal: 15,
              }}
              data={MarketOrdersData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <MarketOrdersCard
                  item={item}
                  siparisNo={item?.siparisNo}
                  siparisTarih={item?.siparisTarih}
                  siparisSaati={item?.siparisSaati}
                  siparisDurumu={item?.siparisDurumu}
                  siparisToplam={item?.siparisToplam}
                  marketName={item?.marketName}
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

export default Orders;

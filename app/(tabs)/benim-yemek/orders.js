import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";

import { useSelector } from "react-redux";
import NoLoginProfile from "../../noLoginProfile";

import YemekOrdersData from "../../data/yemekOrders.json";
import YemekOrdersCard from "../../components/yemek-cards/yemek-orders-card";

const Orders = () => {
  const user = useSelector((state) => state.userSlice.user);

  return (
    <View>
      {user ? (
        <View>
          <View marginT-35 backgroundColor={COLORS.yemegin.backgroundColor}>
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
              data={YemekOrdersData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <YemekOrdersCard
                  item={item}
                  siparisNo={item?.siparisNo}
                  siparisTarih={item?.siparisTarih}
                  siparisSaati={item?.siparisSaati}
                  siparisDurumu={item?.siparisDurumu}
                  siparisToplam={item?.siparisToplam}
                  markaName={item?.markaName}
                />
              )}
            />
          </View>

          <MainHeader
            close
            backgroundColor={COLORS.yemegin.tabIconColor}
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

export default Orders;

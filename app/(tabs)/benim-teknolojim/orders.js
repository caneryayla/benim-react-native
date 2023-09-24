import { FlatList, Text } from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";

import { useSelector } from "react-redux";
import NoLoginProfile from "../../noLoginProfile";

import TeknoOrdersData from "../../data/teknolojimOrders.json";
import TeknoOrdersCard from "../../components/tekno-cards/tekno-orders-card";

const Orders = () => {
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
              contentContainerStyle={{
                paddingBottom: 150,
                paddingTop: 50,
                paddingHorizontal: 15,
              }}
              data={TeknoOrdersData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TeknoOrdersCard
                  item={item}
                  siparisNo={item?.siparisNo}
                  siparisTarih={item?.siparisTarih}
                  siparisSaati={item?.siparisSaati}
                  siparisDurumu={item?.siparisDurumu}
                  siparisToplam={item?.siparisToplam}
                  markaName={item?.siparisId}
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

export default Orders;

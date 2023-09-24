import { FlatList, ScrollView, Text } from "react-native";
import React from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { View } from "react-native-ui-lib";
import { useSelector } from "react-redux";

import BuyTicketCard from "../../components/ticket-cards/buy-ticket-card";
import NoLoginProfile from "../../noLoginProfile";

import BiletOrdersData from "../../data/biletOrders.json";

const Orders = () => {
  const user = useSelector((state) => state.userSlice.user);

  return (
    <View>
      {user ? (
        <View width={"100%"} height={"100%"}>
          <View marginT-35 backgroundColor={COLORS.biletin.backgroundColor2}>
            <Text>{""}</Text>
          </View>

          <View width={"100%"} height={"100%"} backgroundColor="white">
            <FlatList
              bounces={false}
              contentContainerStyle={{
                paddingBottom: 50,
                paddingTop: 50,
                paddingHorizontal: 15,
              }}
              data={BiletOrdersData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <BuyTicketCard
                  item={item}
                  fiyat={item.biletFiyati}
                  konser_Adi={item.konser_adi}
                  konserYeri={item.konser_yer}
                  konser_Saati={item.konser_saat}
                  konser_Tarih={item.konser_tarih}
                  kategori_Adi={item.kategori_adi}
                  konser_img={item.konser_img}
                  siparih_tarih={item.siparisTarih}
                  siparih_saat={item.siparisSaat}
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

export default Orders;

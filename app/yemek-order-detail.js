import { ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { View } from "react-native-ui-lib";
import TitleHeader from "./components/headers/title-header";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/COLOR";

import yemekOrdersData from "./data/yemekOrders.json";
import YemekOrderDetailCard from "./components/yemek-cards/yemek-order-detail-card";

const YemekOrderDetail = () => {
  const { id } = useLocalSearchParams();

  const orderProductsData = yemekOrdersData.find(
    (item) => item?.siparisId == id
  );

  const formatPhoneNumber = (phoneNumber) => {
    const cleanedNumber = phoneNumber.replace(/\D/g, "");
    const firstThree = cleanedNumber.substring(0, 3);
    const lastTwo = cleanedNumber.substring(cleanedNumber.length - 2);

    const hiddenPart = cleanedNumber
      .substring(3, cleanedNumber.length - 2)
      .replace(/\d/g, "*");

    return `${firstThree}${hiddenPart}${lastTwo}`;
  };

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 85,
          paddingBottom: 30,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "92%",
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#DBE0D9",
            borderRadius: 10,
          }}
        >
          {orderProductsData?.siparisDurumu === "Siparişiniz Alındı" && (
            <View center row style={{ justifyContent: "space-between" }}>
              <View width={"10%"}>
                <Ionicons
                  color="green"
                  size={wp("7")}
                  name="thumbs-up-outline"
                />
              </View>

              <View width={"89%"}>
                <Text
                  style={{
                    fontSize: hp("1.6"),
                    fontWeight: "200",
                    marginBottom: 3,
                  }}
                >
                  Sipariş Durumu
                </Text>
                <Text
                  style={{
                    color: "green",
                    fontSize: hp("1.8"),
                    fontWeight: "500",
                  }}
                >
                  {orderProductsData?.siparisDurumu}
                </Text>
              </View>
            </View>
          )}
          {orderProductsData?.siparisDurumu === "Hazırlanıyor" && (
            <View center row style={{ justifyContent: "space-between" }}>
              <View width={"10%"}>
                <Ionicons color="orange" size={wp("7")} name="cube-outline" />
              </View>
              <View width={"89%"}>
                <Text
                  style={{
                    fontSize: hp("1.6"),
                    fontWeight: "200",
                    marginBottom: 3,
                  }}
                >
                  Sipariş Durumu
                </Text>
                <Text
                  style={{
                    color: "orange",
                    fontSize: hp("1.8"),
                    fontWeight: "500",
                  }}
                >
                  {orderProductsData?.siparisDurumu}
                </Text>
              </View>
            </View>
          )}
          {orderProductsData?.siparisDurumu === "Yola Çıktı" && (
            <View center row style={{ justifyContent: "space-between" }}>
              <View width={"10%"}>
                <Ionicons color="#ff7e21" size={wp("7")} name="car-outline" />
              </View>
              <View width={"89%"}>
                <Text
                  style={{
                    fontSize: hp("1.6"),
                    fontWeight: "200",
                    marginBottom: 3,
                  }}
                >
                  Sipariş Durumu
                </Text>
                <Text
                  style={{
                    color: "#ff7e21",
                    fontSize: hp("1.8"),
                    fontWeight: "500",
                  }}
                >
                  {orderProductsData?.siparisDurumu}
                </Text>
              </View>
            </View>
          )}
          {orderProductsData?.siparisDurumu === "Teslim Edildi" && (
            <View center row style={{ justifyContent: "space-between" }}>
              <View width={"10%"}>
                <Ionicons
                  color="green"
                  size={wp("7")}
                  name="checkmark-circle-outline"
                />
              </View>
              <View width={"89%"}>
                <Text
                  style={{
                    fontSize: hp("1.6"),
                    fontWeight: "200",
                    marginBottom: 3,
                  }}
                >
                  Sipariş Durumu
                </Text>
                <Text
                  style={{
                    color: "green",
                    fontSize: hp("1.8"),
                    fontWeight: "500",
                  }}
                >
                  {orderProductsData?.siparisDurumu}
                </Text>
              </View>
            </View>
          )}
          {orderProductsData?.siparisDurumu === "İptal Edildi" && (
            <View center row style={{ justifyContent: "space-between" }}>
              <View width={"10%"}>
                <Ionicons
                  color="red"
                  size={wp("7")}
                  name="close-circle-outline"
                />
              </View>
              <View width={"89%"}>
                <Text
                  style={{
                    fontSize: hp("1.6"),
                    fontWeight: "200",
                    marginBottom: 3,
                  }}
                >
                  Sipariş Durumu
                </Text>
                <Text
                  style={{
                    fontSize: hp("1.8"),
                    fontWeight: "500",
                    color: "red",
                  }}
                >
                  {orderProductsData?.siparisDurumu}
                </Text>
              </View>
            </View>
          )}
        </View>

        <View
          style={{
            width: "92%",
            padding: 11,
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#DBE0D9",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: hp("1.7"),
              fontWeight: "600",
              marginBottom: 3,
            }}
          >
            Sipariş No :{" "}
            <Text
              style={{
                fontSize: hp("1.6"),
                fontWeight: "200",
              }}
            >
              #{orderProductsData.siparisNo}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: hp("1.7"),
              fontWeight: "600",
            }}
          >
            Sipariş Tarihi :{" "}
            <Text
              style={{
                fontSize: hp("1.6"),
                fontWeight: "200",
              }}
            >
              {orderProductsData.siparisTarih} -{" "}
              {orderProductsData.siparisSaati}
            </Text>
          </Text>
        </View>

        <View
          style={{
            width: "92%",
            padding: 11,
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#DBE0D9",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Ionicons size={wp("7")} name="document-text-outline" />
            <Text>Teslimat Formu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Ionicons size={wp("7")} name="receipt-outline" />
            <Text>Bilgi Fişi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Ionicons size={wp("7")} name="reader-outline" />
            <Text>E-Arşiv Fatura</Text>
          </TouchableOpacity>
        </View>

        {orderProductsData?.urunler?.map((item, index) => (
          <YemekOrderDetailCard
            key={item.urunId}
            urun_adi={item.urunAdi}
            urun_img={item.urunImage}
            urun_fiyat={item.urunFiyati}
            urun_adet={item.urunAdedi}
            id={item.urunId}
          />
        ))}

        <View
          style={{
            width: "92%",
            padding: 11,
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#DBE0D9",
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{ fontSize: hp("1.8"), fontWeight: 600, marginBottom: 8 }}
          >
            Fatura Adresi
          </Text>
          <Text
            style={{ fontSize: hp("1.8"), fontWeight: 600, marginBottom: 8 }}
          >
            {orderProductsData.addresses.address_name}
          </Text>
          <Text
            style={{ fontSize: hp("1.7"), fontWeight: 300, marginBottom: 8 }}
          >
            {orderProductsData.addresses.address}{" "}
            {orderProductsData.addresses.neighbourhood}{" "}
            {orderProductsData.addresses.county}
            {" / "}
            {orderProductsData.addresses.city}{" "}
          </Text>
          <Text
            style={{ fontSize: hp("1.7"), fontWeight: 300, marginBottom: 0 }}
          >
            {formatPhoneNumber(orderProductsData.addresses.tel)}
          </Text>
        </View>

        <View
          style={{
            width: "92%",
            padding: 11,
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#DBE0D9",
            borderRadius: 10,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: hp("1.8"), fontWeight: 600, marginBottom: 8 }}
            >
              Sipariş Özeti
            </Text>
            <Text
              style={{ fontSize: hp("1.8"), fontWeight: 400, marginBottom: 8 }}
            >
              {orderProductsData.urunler.length} Ürün
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: hp("1.8"), fontWeight: 400, marginBottom: 8 }}
            >
              Teslimat Ücreti
            </Text>
            <Text
              style={{ fontSize: hp("1.8"), fontWeight: 400, marginBottom: 8 }}
            >
              20,00 TL
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: hp("1.9"),
                fontWeight: 800,
                marginBottom: 8,
                color: COLORS.yemegin.backgroundColor,
              }}
            >
              Genel Toplam
            </Text>
            <Text
              style={{
                fontSize: hp("1.9"),
                fontWeight: 700,
                marginBottom: 8,
                color: COLORS.yemegin.backgroundColor,
              }}
            >
              {orderProductsData.siparisToplamı} TL
            </Text>
          </View>
        </View>
      </ScrollView>

      <TitleHeader goBack title={"Sipariş Detayı"} />
    </View>
  );
};

export default YemekOrderDetail;

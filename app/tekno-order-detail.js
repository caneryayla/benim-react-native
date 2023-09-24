import { ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { View } from "react-native-ui-lib";
import TitleHeader from "./components/headers/title-header";
import { useLocalSearchParams } from "expo-router";
import teknoOrdersData from "./data/teknolojimOrders.json";
import TeknoOrderDetailCard from "./components/tekno-cards/tekno-order-detail-card";

import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../constants/COLOR";

const TeknoOrderDetail = () => {
  const { id } = useLocalSearchParams();

  const orderProductsData = teknoOrdersData.find(
    (item) => item?.siparisId == id
  );

  const groupedProducts = {};
  const uniqueMarkaIds = [];
  orderProductsData.urunler.forEach((product) => {
    const markaId = product.markaId;
    if (!groupedProducts[markaId]) {
      groupedProducts[markaId] = [];
      uniqueMarkaIds.push(markaId);
    }
    groupedProducts[markaId].push(product);
  });

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
          paddingTop: 80,
          paddingBottom: 30,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "92%",
            padding: 11,
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#DBE0D9",
            borderRadius: 10,
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
              marginBottom: 3,
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
          <Text
            style={{
              fontSize: hp("1.7"),
              fontWeight: "600",
              marginBottom: 3,
            }}
          >
            Sipariş Özeti :{" "}
            <Text
              style={{
                fontSize: hp("1.6"),
                fontWeight: "200",
              }}
            >
              {uniqueMarkaIds.length} Teslimat{", "}
              {orderProductsData.urunler.length} Ürün
            </Text>
          </Text>
          <Text
            style={{
              fontSize: hp("1.7"),
              fontWeight: "600",
              marginBottom: 2,
            }}
          >
            Sipariş Toplamı :{" "}
            <Text
              style={{
                fontSize: hp("1.6"),
                fontWeight: "600",
              }}
            >
              {new Intl.NumberFormat({
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 0,
              }).format(orderProductsData.siparisToplamı)}{" "}
              ₺
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
            <Ionicons size={hp("3.5")} name="document-text-outline" />
            <Text style={{ fontSize: hp("1.7") }}>Teslimat Formu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Ionicons size={hp("3.5")} name="receipt-outline" />
            <Text style={{ fontSize: hp("1.7") }}>Bilgi Fişi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Ionicons size={hp("3.5")} name="reader-outline" />
            <Text style={{ fontSize: hp("1.7") }}>E-Arşiv Fatura</Text>
          </TouchableOpacity>
        </View>
        {Object.keys(groupedProducts).map((markaId) => {
          const markaProducts = groupedProducts[markaId];
          return (
            <View
              key={markaId}
              style={{
                width: "92%",
                padding: 11,
                borderWidth: 1,
                borderColor: "#DBE0D9",
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: hp("1.8"),
                  fontWeight: "600",
                }}
              >
                Marka: {markaProducts[0].markaName}
              </Text>
              {markaProducts[0].siparisDurumu === "Siparişiniz Alındı" && (
                <View
                  center
                  row
                  style={{ marginTop: 5, justifyContent: "space-between" }}
                >
                  <View width={"6%"}>
                    <Ionicons
                      color="green"
                      size={wp("4.7")}
                      name="thumbs-up-outline"
                    />
                  </View>
                  <View width={"93%"}>
                    <Text
                      style={{
                        color: "green",
                        fontSize: hp("1.7"),
                        fontWeight: "500",
                      }}
                    >
                      {markaProducts[0].siparisDurumu}
                    </Text>
                  </View>
                </View>
              )}
              {markaProducts[0].siparisDurumu === "Hazırlanıyor" && (
                <View
                  center
                  row
                  style={{ marginTop: 5, justifyContent: "space-between" }}
                >
                  <View width={"6%"}>
                    <Ionicons
                      color="orange"
                      size={wp("5")}
                      name="cube-outline"
                    />
                  </View>
                  <View width={"93%"}>
                    <Text
                      style={{
                        color: "orange",
                        fontSize: hp("1.7"),
                        fontWeight: "500",
                      }}
                    >
                      {markaProducts[0].siparisDurumu}
                    </Text>
                  </View>
                </View>
              )}
              {markaProducts[0].siparisDurumu === "Yola Çıktı" && (
                <View
                  center
                  row
                  style={{ marginTop: 5, justifyContent: "space-between" }}
                >
                  <View width={"6%"}>
                    <Ionicons
                      color="#ff7e21"
                      size={wp("5")}
                      name="car-outline"
                    />
                  </View>
                  <View width={"93%"}>
                    <Text
                      style={{
                        color: "#ff7e21",
                        fontSize: hp("1.7"),
                        fontWeight: "500",
                      }}
                    >
                      {markaProducts[0].siparisDurumu}
                    </Text>
                  </View>
                </View>
              )}
              {markaProducts[0].siparisDurumu === "Teslim Edildi" && (
                <View
                  center
                  row
                  style={{ marginTop: 5, justifyContent: "space-between" }}
                >
                  <View width={"6%"}>
                    <Ionicons
                      color="green"
                      size={wp("5")}
                      name="checkmark-circle-outline"
                    />
                  </View>
                  <View width={"93%"}>
                    <Text
                      style={{
                        color: "green",
                        fontSize: hp("1.7"),
                        fontWeight: "500",
                      }}
                    >
                      {markaProducts[0].siparisDurumu}
                    </Text>
                  </View>
                </View>
              )}
              {markaProducts[0].siparisDurumu === "İptal Edildi" && (
                <View
                  center
                  row
                  style={{ marginTop: 5, justifyContent: "space-between" }}
                >
                  <View width={"6%"}>
                    <Ionicons
                      color="red"
                      size={wp("5")}
                      name="close-circle-outline"
                    />
                  </View>
                  <View width={"93%"}>
                    <Text
                      style={{
                        color: "red",
                        fontSize: hp("1.7"),
                        fontWeight: "500",
                      }}
                    >
                      {markaProducts[0].siparisDurumu}
                    </Text>
                  </View>
                </View>
              )}
              {markaProducts.map((item, index) => (
                <TeknoOrderDetailCard
                  key={item.urunId}
                  urun_adi={item.urunAdi}
                  urun_img={item.urunImage}
                  urun_fiyat={item.urunFiyati}
                  urun_adet={item.urunAdedi}
                  id={item.urunId}
                />
              ))}
            </View>
          );
        })}

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
                color: COLORS.teknon.backgroundColor,
              }}
            >
              Genel Toplam
            </Text>
            <Text
              style={{
                fontSize: hp("1.9"),
                fontWeight: 700,
                marginBottom: 8,
                color: COLORS.teknon.backgroundColor,
              }}
            >
              {new Intl.NumberFormat({
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 0,
              }).format(orderProductsData.siparisToplamı)}{" "}
              TL
            </Text>
          </View>
        </View>
      </ScrollView>

      <TitleHeader goBack title={"Sipariş Detayı"} />
    </View>
  );
};

export default TeknoOrderDetail;

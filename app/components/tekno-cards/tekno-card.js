import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import teknolojimProducts from "../../data/teknolojimProducts.json";
import teknoData from "../../data/teknolojim.json";
import { FlatList, Image, ScrollView } from "react-native";
import { COLORS } from "../../../constants/COLOR";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const TeknoCard = ({ item, kategoriiD, kategoriAdi }) => {
  const [isCardVisible, setCardVisible] = useState(true);

  const toggleCard = () => {
    setCardVisible(!isCardVisible);
  };

  const router = useRouter();

  const teknoProduct = teknolojimProducts?.filter(
    (teknom) => teknom.kategoriId == item?.kategoriId
  );

  const goProductDetail = (urun) => {
    router.push({
      pathname: "/tekno-product-details",
      params: { id: urun?.id },
    });
  };

  const goCategoryDetail = () => {
    router.push({
      pathname: "/tekno-category-details",
      params: { id: kategoriiD },
    });
  };

  return (
    <View marginB-15>
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginHorizontal: 16,
          backgroundColor: "#e6e6e6",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <View width={"92%"}>
          <TouchableOpacity onPress={goCategoryDetail}>
            <Text
              style={{
                color: COLORS.teknon.backgroundColor,
                fontWeight: 600,
              }}
            >
              {kategoriAdi}
            </Text>
          </TouchableOpacity>
        </View>
        <View width={"8%"}>
          <TouchableOpacity onPress={toggleCard}>
            <Ionicons
              size={wp("6")}
              name={
                isCardVisible
                  ? "chevron-up-circle-outline"
                  : "chevron-down-circle-outline"
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      {isCardVisible && (
        <View
          style={{
            marginHorizontal: 19,
            backgroundColor: "white",
            borderRadius: 5,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 1,
          }}
        >
          <ScrollView
            bounces={false}
            contentContainerStyle={{ paddingRight: 11 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                width: "100%",
                alignItems: "center",
                flexDirection: "row",
                overflow: "hidden",
              }}
            >
              {teknoProduct?.map((urun, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => goProductDetail(urun)}
                  style={{
                    width: 92,
                    marginLeft: 11,
                    borderColor: "black",
                    borderWidth: 0.4,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    marginVertical: 10,
                    paddingBottom: 10,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: 70,
                      marginBottom: 5,
                      marginTop: 10,
                    }}
                    source={{
                      uri: urun?.image,
                    }}
                  />

                  <View style={{ paddingHorizontal: 5, alignItems: "center" }}>
                    <Text numberOfLines={1}>{urun.name}</Text>
                    <Text style={{ fontSize: hp("1.5"), fontWeight: "500" }}>
                      {new Intl.NumberFormat({
                        style: "currency",
                        currency: "TRY",
                        maximumFractionDigits: 0,
                      }).format(urun?.price)}{" "}
                      ₺
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default TeknoCard;

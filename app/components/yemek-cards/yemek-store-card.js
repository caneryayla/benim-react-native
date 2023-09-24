import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { COLORS } from "../../../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import yemekProductData from "../../data/yemekProducts.json";

const YemekStoreCard = ({
  item,
  mutfak_adi,
  mutfak_logo,
  mutfak_yeri,
  mutfak_puan,
}) => {
  const router = useRouter();

  const yemekProducts = yemekProductData
    ?.filter((yemegin) => yemegin.marka_id == item?.id)
    ?.slice(0, 3);

  const goMutfak = () => {
    router.push({
      pathname: "/yemek-details",
      params: { id: item?.id },
    });
  };

  const goProductDetail = (product) => {
    router.push({
      pathname: "/yemek-product-details",
      params: { id: product?.id },
    });
  };

  return (
    <View
      style={{
        width: "100%",
        marginBottom: hp("1.5"),
        borderWidth: 1,
        borderColor: "#DBE0D9",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          padding: hp("1.5"),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "15%" }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 40,
                objectFit: "contain",
              }}
              source={{ uri: mutfak_logo }}
            />
          </View>

          <View
            style={{
              width: "82%",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: hp("1.8"), fontWeight: 500 }}>
                  {mutfak_adi}
                  {" - "}
                </Text>
                <Text style={{ fontSize: hp("1.8"), fontWeight: 500 }}>
                  {mutfak_yeri}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: hp("1.8"), fontWeight: 500 }}>
                  {mutfak_puan}{" "}
                  <Ionicons color={"orange"} name="star" size={wp("4")} />
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: hp("1.6"), fontWeight: 200 }}>
                20-30 dk.
              </Text>
              <Text style={{ fontSize: hp("1.6"), fontWeight: 200 }}>
                Min. 100 TL
              </Text>
              <Text style={{ fontSize: hp("1.6"), fontWeight: 200 }}>
                Başarılı Satıcı{"  "}
                <Ionicons color={"orange"} name="ribbon" size={wp("4")} />
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: hp("1"),
          }}
        >
          <Text style={{ fontSize: hp("1.6"), fontWeight: 400 }}>
            Seçili Ürünler
          </Text>
          <TouchableOpacity onPress={goMutfak}>
            <Text style={{ fontSize: hp("1.6"), fontWeight: 500 }}>
              Yemeğine Git{"  "}
              <Ionicons
                color={"orange"}
                size={wp("4")}
                name="arrow-forward-circle"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          paddingBottom: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {yemekProducts?.map((product, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goProductDetail(product)}
            style={{
              borderColor: COLORS.yemegin.backgroundColor,
              borderWidth: 0.4,
              borderRadius: 10,
              marginLeft: wp("2.1"),
              width: wp("27.5"),
              height: hp("16"),
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: wp("26"),
                height: hp("10"),
                objectFit: "contain",
              }}
              source={{
                uri: product?.image,
              }}
            />

            <View
              style={{
                padding: hp("1.1"),
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                numberOfLines={1}
                style={{ fontSize: hp("1.5"), fontWeight: "500" }}
              >
                {product?.name}
              </Text>
              <Text style={{ fontSize: hp("1.5"), fontWeight: "500" }}>
                {product?.price} ₺
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topLeft: {
    width: "15%",
    height: "65%",
    borderRadius: 50,
    overflow: "hidden",
  },
  topRight: {
    width: "78%",
    height: "85%",
  },
  top: {
    width: "100%",
    height: "35%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderBottomWidth: 0.2,
  },
  bottom: {
    width: "100%",
    height: "65%",
    borderWidth: 2,
    borderColor: "#d9d9d9",
    borderTopWidth: 0,
    borderRadius: 10,
    alignItems: "center",
  },
  container: {
    width: "92%",
    height: 240,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 13,
    marginLeft: 16,
  },
});

export default YemekStoreCard;

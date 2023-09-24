import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { COLORS } from "../../../constants/COLOR";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const MarketProductCard = ({ urun_img, urun_adi, urun_fiyat, id }) => {
  const router = useRouter();

  const goProductDetail = (id) => {
    router.push({
      pathname: "/market-product-details",
      params: { id: id },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goProductDetail(id)}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: 100,
            height: 115,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "90%", height: "90%", objectFit: "contain" }}
            source={{ uri: urun_img }}
          />
        </View>
        <View
          style={{
            width: "90%",
            height: "30%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>
            {urun_adi}
          </Text>
          <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>
            {urun_fiyat} ₺
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: 165,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 13,
    marginLeft: 10,
    borderColor: COLORS.marketin.backgroundColor,
    borderWidth: 0.4,
  },
});

export default MarketProductCard;

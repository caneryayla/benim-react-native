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

const TeknoProductCard = ({ urun_img, urun_adi, urun_fiyat, id }) => {
  const router = useRouter();

  const goProductDetail = (id) => {
    router.push({
      pathname: "/tekno-product-details",
      params: { id: id },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => goProductDetail(id)}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            width: 100,
            height: 90,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            source={{ uri: urun_img }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("1.5"), fontWeight: 400 }}>
            {urun_adi}
          </Text>
          <Text style={{ fontSize: hp("1.6"), fontWeight: 600, marginTop: 5 }}>
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
    height: 170,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 13,
    marginLeft: 10,
    borderColor: COLORS.marketin.backgroundColor,
    borderWidth: 0.4,
  },
});

export default TeknoProductCard;

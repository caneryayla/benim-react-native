import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const TeknoOrderDetailCard = ({
  urun_img,
  urun_adi,
  urun_fiyat,
  urun_adet,
  id,
}) => {
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
        style={{ width: "30%", alignItems: "center", justifyContent: "center" }}
        onPress={() => goProductDetail(id)}
      >
        <Image
          style={{ width: 90, height: 100, objectFit: "contain" }}
          source={{
            uri: urun_img,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: hp("1.6"), fontWeight: 600 }}>{urun_adi}</Text>
        <Text style={{ fontSize: hp("1.6"), fontWeight: 600 }}>
          {new Intl.NumberFormat({
            style: "currency",
            currency: "TRY",
            maximumFractionDigits: 0,
          }).format(urun_fiyat)}{" "}
          ₺
        </Text>
      </View>
      <View center style={{ width: "20%" }}>
        <View
          style={{
            padding: 15,
            paddingBottom: 10,
            paddingTop: 10,
            borderRadius: 10,
            backgroundColor: "#e6e6e6",
          }}
        >
          <Text
            style={{
              fontSize: hp("2"),
              fontWeight: 600,
              borderRadius: 100,
            }}
          >
            {urun_adet}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    borderColor: "#e6e6e6",
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 10,
  },
});

export default TeknoOrderDetailCard;

import React, { useState } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { COLORS } from "../../../constants/COLOR";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const MarketShopBagCard = ({
  urun_stok,
  urun_adet,
  urun_adi,
  urun_img,
  urun_fiyat,
}) => {
  const router = useRouter();

  const [adet, setAdet] = useState(urun_adet);

  const handleDecrease = () => {
    if (adet > 1) {
      setAdet(adet - 1);
    } else {
      alert("sil işlemi");
    }
    console.log("azaldı");
  };

  const handleIncrease = () => {
    if (urun_stok <= adet) {
      alert("stokda daha fazla ürün bulunmamaktadı");
    } else {
      setAdet(adet + 1);
    }

    console.log("arttı");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "30%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "100%", height: "70%", objectFit: "contain" }}
            source={{
              uri: urun_img,
            }}
          />
        </View>
        <View
          style={{
            width: "40%",
            height: "90%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>
            {urun_adi}
          </Text>
          <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>
            {urun_fiyat * adet} ₺
          </Text>
        </View>

        <View
          style={{
            width: "30%",
            height: "90%",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={handleDecrease}
            style={{
              width: "21%",
              height: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              backgroundColor: "#a3a6a2",
            }}
          >
            <Text
              style={{
                marginBottom: 2,
                color: "white",
                fontSize: hp("2.3"),
                fontWeight: "800",
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <Text
              style={{ color: "black", fontSize: hp("2.5"), fontWeight: "600" }}
            >
              {adet}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleIncrease}
            style={{
              width: "21%",
              height: "25%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 100,
              backgroundColor: "#a3a6a2",
            }}
          >
            <Text
              style={{
                marginBottom: 2,
                color: "white",
                fontSize: hp("2"),
                fontWeight: "800",
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 110,
    backgroundColor: "white",
    borderColor: COLORS.marketin.backgroundColor,
    borderWidth: 0.3,
  },
});

export default MarketShopBagCard;

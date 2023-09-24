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

const TicketShopBagCard = ({
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
            style={{
              borderRadius: 10,
              width: "85%",
              height: "82%",
              objectFit: "cover",
            }}
            source={require("../../../assets/image/konser_1.jpg")}
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
            Vip - Rock Fest
          </Text>
          <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>100 ₺</Text>
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

export default TicketShopBagCard;

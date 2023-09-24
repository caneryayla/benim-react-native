import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import React from "react";
import { View } from "react-native-ui-lib";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants/COLOR";

const BuyTicketCard = ({
  item,
  kategori_Adi,
  konser_Adi,
  konser_img,
  fiyat,
  siparih_tarih,
  siparih_saat,
}) => {
  const router = useRouter();

  const goBiletPdf = () => {
    router.push({
      pathname: "my-tickets",
      params: { id: item?.id },
    });
  };

  return (
    <View marginB-15>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: COLORS.biletin.backgroundColor,
          borderRadius: 10,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
          flexDirection: "column",
        }}
        onPress={goBiletPdf}
      >
        <View row spread padding-10>
          <Text style={{ fontSize: 15, fontWeight: 500 }}>Sipariş Tarihi</Text>
          <Text style={{ fontSize: 15, fontWeight: 300 }}>
            {siparih_tarih} - {siparih_saat}
          </Text>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: COLORS.biletin.backgroundColor,
            flexDirection: "row",
          }}
        >
          <View center width={120} height={120}>
            <Image
              style={{
                borderRadius: 10,
                width: "85%",
                height: "82%",
                objectFit: "cover",
              }}
              source={{ uri: konser_img }}
            />
          </View>

          <View
            style={{
              width: "60%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{konser_Adi}</Text>
            <Text style={{ fontSize: 15, fontWeight: 600 }}>
              {kategori_Adi} Bilet
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 600 }}>{fiyat} ₺</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BuyTicketCard;

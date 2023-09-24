import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native-ui-lib";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../../../constants/COLOR";

const MarketFavoritesCard = ({
  urunId,
  marketName,
  marketId,
  urun_img,
  urunAdi,
}) => {
  const router = useRouter();

  const [like, setLike] = useState(true);

  const FavoriteAddRemoveClick = () => {
    setLike(!like);
  };

  const productPress = (urunId) => {
    router.push({
      pathname: "/market-product-details",
      params: { id: urunId },
    });
  };
  const goMarket = (marketId) => {
    router.push({
      pathname: "/market-details",
      params: { id: marketId },
    });
  };

  if (!like) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => productPress(urunId)}
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={FavoriteAddRemoveClick}
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99,
            top: 2,
            right: 3,
          }}
        >
          <Ionicons
            size={22}
            color={like ? "red" : "gray"}
            name={like ? "heart" : "heart-outline"}
          />
        </TouchableOpacity>
        <View
          style={{
            width: "90%",
            height: "70%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "90%", height: "85%", objectFit: "cover" }}
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
          <TouchableOpacity onPress={() => goMarket(marketId)}>
            <Text
              numberOfLines={1}
              style={{ fontSize: hp("1.4"), fontWeight: 700 }}
            >
              {marketName}{" "}
              <Text style={{ fontSize: hp("1.4"), fontWeight: 400 }}>
                {urunAdi}
              </Text>
            </Text>
          </TouchableOpacity>
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

export default MarketFavoritesCard;

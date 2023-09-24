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

const BiletFavoritesCard = ({ biletId, konserId, konserImage, konserAdi }) => {
  const router = useRouter();

  const [like, setLike] = useState(true);

  const FavoriteAddRemoveClick = () => {
    setLike(!like);
  };

  const productPress = (biletId) => {
    router.push({
      pathname: "/event-details",
      params: { id: biletId },
    });
  };

  if (!like) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => productPress(biletId)}>
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
            width: 115,
            height: 140,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: "90%", height: "90%", objectFit: "cover" }}
            source={{ uri: konserImage }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View paddingB-10>
            <Text style={{ fontSize: hp("1.6"), fontWeight: 600 }}>
              {konserAdi}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "30%",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 13,
    marginLeft: 10,
    borderColor: COLORS.marketin.backgroundColor,
    borderWidth: 0.4,
  },
});

export default BiletFavoritesCard;

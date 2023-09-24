import { Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { View } from "react-native-ui-lib";
import { COLORS } from "../../../constants/COLOR";
import { useRouter } from "expo-router";

const GiftCard = ({ item, kampanyaImg, baslık }) => {
  const router = useRouter();

  const goMutfak = () => {
    router.push({
      pathname: "/yemek-details",
      params: { id: item?.mutfak_id },
    });
  };

  return (
    <View
      style={{
        width: "100%",
        height: 145,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS.yemegin.tabIconFocusColor,
        borderRadius: "10%",
        overflow: "hidden",
      }}
    >
      <TouchableOpacity
        onPress={goMutfak}
        style={{ justifyContent: "space-between" }}
      >
        <Image
          style={{
            width: "100%",
            height: "85%",
            objectFit: "contain",
          }}
          source={{ uri: kampanyaImg }}
        />

        <Text
          style={{
            paddingLeft: hp("1.5"),
            fontSize: hp("1.8"),
            fontWeight: 600,
          }}
        >
          {baslık}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GiftCard;

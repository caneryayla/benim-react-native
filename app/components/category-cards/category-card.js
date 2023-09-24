import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Image, Text, View } from "react-native-ui-lib";
import { FONTSIZE } from "../../../constants/FONTSIZE";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CategoryCards = ({ name, backcolor, titlecolor, href, icon }) => {
  const router = useRouter();

  const goCategory = () => {
    router.push("/" + href);
  };

  return (
    <View
      style={{ borderRadius: 10 }}
      spread
      row
      marginH-15
      marginB-17
      backgroundColor={backcolor}
    >
      <View width={100} height={97} padding-20>
        <Image
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          source={icon}
        />
      </View>
      <View
        style={{
          width: "45%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontWeight: 200,
            fontSize: hp(FONTSIZE.text.cardheadertext),
            color: "black",
          }}
        >
          {name}
        </Text>
      </View>
      <View
        style={{
          width: "20%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={{ padding: 10 }} onPress={goCategory}>
          <Ionicons name="arrow-forward-circle" color={titlecolor} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryCards;

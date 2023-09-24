import { Text, View } from "react-native-ui-lib";
import { Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TitleImageHeader = ({ goBack, title, img }) => {
  const router = useRouter();

  return (
    <View
      style={{
        width: "100%",
        height: 80,
        alignItems: "flex-end",
      }}
      row
    >
      <View style={{ width: "20%", height: "50%" }} center>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons color="black" size={hp("2.4%")} name="chevron-back" />
        </TouchableOpacity>
      </View>

      <View style={{ width: "10%", height: "50%" }} center></View>

      <View
        style={{ width: "40%", height: "50%", justifyContent: "center" }}
        center
        row
      >
        <View
          style={{
            width: "22%",
            height: "85%",
            borderRadius: 50,
            borderWidth: 0.5,
            borderColor: "black",
            overflow: "hidden",
            marginRight: 5,
          }}
        >
          <Image
            style={{ width: "100%", height: "90%", objectFit: "contain" }}
            source={{ uri: img }}
          />
        </View>
        <View style={{ height: "50%" }}>
          <Text
            style={{
              fontWeight: 500,
              fontSize: hp("2"),
              color: "black",
            }}
          >
            {title}
          </Text>
        </View>
      </View>

      <View style={{ width: "30%", height: "50%" }} center></View>
    </View>
  );
};

export default TitleImageHeader;

import { Text, View } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";

const TitleHeader = ({ goBack, title, heart, onPress }) => {
  const router = useRouter();

  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        top: 0,
        borderTopWidth: 0,
        borderColor: "#E8E8E8",
        overflow: "hidden",
      }}
    >
      <BlurView style={{ paddingTop: 35 }} intensity={10}>
        <View centerV row width={"100%"} padding-10>
          <View width={"20%"} center>
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <Ionicons color="black" size={hp("2.4%")} name="chevron-back" />
            </TouchableOpacity>
          </View>

          <View width={"60%"} center>
            <Text
              style={{
                fontWeight: 500,
                fontSize: hp("2.1"),
                color: "black",
              }}
            >
              {title}
            </Text>
          </View>
          <View width={"20%"} center>
            <TouchableOpacity onPress={onPress}>
              <Ionicons size={25} color={"red"} name={heart} />
            </TouchableOpacity>
          </View>
        </View>
      </BlurView>
    </View>
  );
};

export default TitleHeader;

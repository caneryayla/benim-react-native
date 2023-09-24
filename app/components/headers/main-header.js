import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text, View } from "react-native-ui-lib";
import { FONTSIZE } from "../../../constants/FONTSIZE";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { BlurView } from "expo-blur";

const MainHeader = ({ logo, name, backgroundColor, close }) => {
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
      <BlurView style={{ paddingTop: 38 }} intensity={100}>
        <View centerV row width={"100%"} padding-10>
          <View width={"21%"}>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              source={logo}
            />
          </View>

          <View width={"60%"} center>
            <Text
              style={{
                fontWeight: 700,
                fontSize: hp(FONTSIZE.text.headertext),
                color: backgroundColor,
              }}
            >
              {name}
            </Text>
          </View>

          <View
            style={{
              width: "15%",
              alignItems: "flex-end",
            }}
          >
            {close && (
              <Link href="home">
                <Ionicons
                  color={backgroundColor}
                  size={hp(FONTSIZE.icon.iconbig)}
                  name="close"
                />
              </Link>
            )}
          </View>
        </View>
      </BlurView>
    </View>
  );
};

export default MainHeader;

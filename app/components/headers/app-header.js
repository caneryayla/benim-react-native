import { Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { FONTSIZE } from "../../../constants/FONTSIZE";
import { useRouter } from "expo-router";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../../redux/reducers/userSlice";

const AppHeader = () => {
  const user = useSelector((state) => state.userSlice.user);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleUserIconClick = () => {
    dispatch(setUser(user));

    if (user) {
      router.push("profile");
      console.log("tıkladı");
    } else {
      router.push("noLoginProfile");
      console.log("tıkladıx");
    }
  };

  return (
    <View
      style={{
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
      width={"100%"}
      height={hp("10")}
      row
      center
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
        }}
        width={"100%"}
        height={"100%"}
      >
        <View
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
          width={"73%"}
          height={"80%"}
        >
          <Image
            resizeMode="contain"
            style={{ width: "60%", height: "45%", objectFit: "contain" }}
            source={require("../../../assets/image/app-image2.png")}
          />
        </View>

        <View
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
          width={"23%"}
          height={"80%"}
        >
          <Ionicons
            color="black"
            size={hp(FONTSIZE.icon.iconbig)}
            name="person"
            onPress={handleUserIconClick}
          />
        </View>
      </View>
    </View>
  );
};

export default AppHeader;

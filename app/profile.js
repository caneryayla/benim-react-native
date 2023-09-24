import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import TitleHeader from "./components/headers/title-header";
import { Link, useRouter } from "expo-router";
import { COLORS } from "../constants/COLOR";
import { FONTSIZE } from "../constants/FONTSIZE";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const RowContainer = ({ item }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(item.href)}
      style={{
        width: "100%",
        height: hp("7%"),
        paddingHorizontal: 15,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            color: COLORS.app.titleColor2,
            fontWeight: "500",
            fontSize: wp("3.7%"),
          }}
        >
          {item?.title}
        </Text>
      </View>
      <Ionicons
        color={COLORS.app.titleColor2}
        name="chevron-forward"
        size={wp("4%")}
      />
    </TouchableOpacity>
  );
};

const UserProfileScreen = () => {
  const router = useRouter();

  const user = useSelector((state) => state.userSlice.user);

  const menuNavigation = [
    {
      title: "Genel Bilgilerim",
      href: "profile-general-information",
    },
    {
      title: "Adres Bilgilerim",
      href: "profile-addres-information",
    },
    {
      title: "Kayıtlı Kartlarım",
      href: "profile-registered-cards",
    },
    {
      title: "E-Mail Değiştir",
      href: "profile-email-change",
    },
    {
      title: "Şifre Değiştir",
      href: "profile-password-change",
    },
  ];

  return (
    <View paddingT-60 flex style={{ backgroundColor: "white" }}>
      <View style={{ justifyContent: "space-between" }}>
        <View height={"40%"} width={"100%"}>
          <ImageBackground
            imageStyle={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
            source={require("../assets/image/bc.png")}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                paddingTop: wp("4"),
              }}
            >
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 100,
                  borderWidth: 0.7,
                  borderColor: "gray",
                  width: 120,
                  height: 120,
                  objectFit: "contain",
                }}
                source={require("../assets/image/usericon.png")}
              />

              <Text
                color={COLORS.app.titleColor}
                bold
                style={{
                  marginTop: hp("2"),
                  fontSize: hp(FONTSIZE.text.cardheadertext),
                  fontWeight: "300",
                }}
              >
                {user?.username} {user?.usersurname}
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingTop: hp("3"),
            height: "60%",
            alignItems: "center",
            backgroundColor: COLORS.app.appColor2,
          }}
        >
          <View
            style={{
              width: "95%",
              padding: hp("1"),
            }}
          >
            {menuNavigation?.map((item, index) => (
              <RowContainer key={index} item={item} />
            ))}
          </View>

          <Link
            style={{
              width: "95%",
              marginTop: hp("7"),
            }}
            href="login"
          >
            <View width={"70%"} row style={{ justifyContent: "space-between" }}>
              <Text
                style={{
                  color: COLORS.app.titleColor2,
                  fontWeight: "500",
                  fontSize: wp("3.7%"),
                  paddingLeft: 25,
                }}
              >
                Çıkış Yap
              </Text>
              <Ionicons
                style={{ marginRight: 20 }}
                color={COLORS.app.titleColor2}
                size={hp(FONTSIZE.icon.iconbig)}
                name="exit-outline"
              />
            </View>
          </Link>
        </View>
      </View>
      <TitleHeader goBack title="Profilim" />
    </View>
  );
};

export default UserProfileScreen;

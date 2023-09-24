import { Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants/COLOR";
import { View } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import TitleHeader from "./components/headers/title-header";
import { useLocalSearchParams } from "expo-router";

import BiletPdfData from "./data/bilet.json";

const MyTickets = () => {
  const { id } = useLocalSearchParams();

  const BiletPdf = BiletPdfData?.filter((item) => item.konserId == id);

  console.log(BiletPdf);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        paddingTop: 110,
      }}
    >
      <ImageBackground
        style={{
          alignItems: "center",
          width: "100%",
          height: "92%",
        }}
        imageStyle={{ objectFit: "contain" }}
        source={require("../assets/image/my-ticket.png")}
      >
        {BiletPdf?.map((item, index) => (
          <View
            key={index}
            center
            width={"80%"}
            height={"78%"}
            marginT-30
            style={{ justifyContent: "space-between" }}
          >
            <View width={"100%"} height={"63%"}>
              <View width={"100%"} height={"60%"}>
                <Image
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                  source={{ uri: item.konser_img }}
                />
              </View>
              <View
                width={"100%"}
                height={"40%"}
                style={{ justifyContent: "space-evenly" }}
              >
                <View
                  row
                  style={{
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    {item.konser_adı}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: 300 }}>
                    {item.yer}📍
                  </Text>
                </View>
                <View
                  row
                  style={{
                    justifyContent: "space-around",
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 300 }}>
                    {item.tarih}
                  </Text>
                  <Text style={{ fontSize: 20, fontWeight: 600 }}>
                    {item.saat}
                  </Text>
                </View>
              </View>
            </View>

            <View width={"95%"} height={"25%"} row>
              <View center width={"35%"} height={"100%"}>
                <Image
                  style={{ width: "90%", height: "90%" }}
                  source={require("../assets/image/qr-code.jpeg")}
                />
              </View>
              <View center width={"65%"} height={"100%"}>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderRadius: 10,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    backgroundColor: COLORS.biletin.backgroundColor2,
                  }}
                >
                  <Text
                    style={{ fontSize: 16, fontWeight: 600, color: "white" }}
                  >
                    Biletimi Kaydet{"  "}
                  </Text>
                  <Ionicons size={21} color={"white"} name="download-outline" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ImageBackground>
      <TitleHeader title="Biletim" />
    </View>
  );
};

export default MyTickets;

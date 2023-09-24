// import { View } from "react-native-ui-lib";
// import { COLORS } from "../../../constants/COLOR";
// import { Ionicons } from "@expo/vector-icons";
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from "react-native-responsive-screen";
// import { TouchableOpacity } from "react-native";
// import { useRouter } from "expo-router";
// import marketProductData from "../../data/marketProducts.json";

// const MarketCard = ({
//   item,
//   market_adi,
//   market_logo,
//   market_yeri,
//   market_puan,
// }) => {
//   const router = useRouter();
//   const marketProducts = marketProductData
//     ?.filter((market) => market.market_id == item?.id)
//     ?.slice(0, 3);

//   const goMarket = () => {
//     router.push({
//       pathname: "/market-details",
//       params: { id: item?.id },
//     });
//   };

//   const goProductDetail = (product) => {
//     router.push({
//       pathname: "/market-product-details",
//       params: { id: product?.id },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.top}>
//         <View style={styles.topLeft}>
//           <Image
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//             }}
//             source={{
//               uri: market_logo,
//             }}
//           />
//         </View>
//         <View style={styles.topRight}>
//           <View
//             width={"98%"}
//             height={"45%"}
//             row
//             spread
//             style={{
//               alignItems: "center",
//             }}
//           >
//             <View style={{ width: "70%" }}>
//               <Text style={{ fontSize: hp("1.7"), fontWeight: "500" }}>
//                 {market_adi} - {market_yeri}
//               </Text>
//             </View>
//             <View
//               style={{
//                 borderWidth: 1,
//                 borderColor: "#E8E8E8",
//                 borderRadius: 5,
//                 paddingHorizontal: 5,
//                 width: "20%",
//                 height: "80%",
//               }}
//               center
//               spread
//               row
//             >
//               <Text
//                 style={{
//                   fontSize: hp("1.7"),
//                   fontWeight: "500",
//                   color: "green",
//                 }}
//               >
//                 {market_puan}
//               </Text>
//               <Ionicons
//                 style={{ paddingLeft: 3 }}
//                 size={wp("3.6")}
//                 color={"green"}
//                 name="star"
//               />
//             </View>
//           </View>

//           <View width={"98%"} height={"40%"} row spread>
//             <View center>
//               <Text style={{ fontSize: hp("1.6"), fontWeight: "200" }}>
//                 20 - 30 dk.
//               </Text>
//             </View>

//             <View center>
//               <Text style={{ fontSize: hp("1.6"), fontWeight: "200" }}>
//                 Min. 100 TL
//               </Text>
//             </View>

//             <View center row>
//               <Text style={{ fontSize: hp("1.6"), fontWeight: "200" }}>
//                 Başarılı Satıcı{" "}
//               </Text>
//               <Ionicons
//                 size={wp("4.2")}
//                 color={COLORS.marketin.backgroundColor}
//                 name="ribbon-outline"
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.bottom}>
//         <View
//           style={{
//             width: "92%",
//             height: "18%",
//             flexDirection: "row",
//             alignItems: "flex-end",
//             justifyContent: "space-between",
//           }}
//         >
//           <View
//             style={{
//               width: "69%",
//               justifyContent: "center",
//             }}
//           >
//             <Text style={{ fontSize: hp("1.6"), fontWeight: "500" }}>
//               Seçili Ürünler
//             </Text>
//           </View>

//           <TouchableOpacity
//             onPress={goMarket}
//             style={{
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <Text style={{ fontSize: hp("1.6"), fontWeight: "400" }}>
//               Markete Git
//             </Text>
//             <Ionicons
//               style={{ marginTop: hp("0.2"), marginLeft: hp("1") }}
//               color={COLORS.marketin.backgroundColor}
//               size={wp("4.5")}
//               name="arrow-forward-circle"
//             />
//           </TouchableOpacity>
//         </View>

//         <View
//           style={{
//             width: "100%",
//             height: "82%",
//             alignItems: "center",
//             flexDirection: "row",
//             overflow: "hidden",
//           }}
//         >
//           {marketProducts?.map((product, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => goProductDetail(product)}
//               style={{
//                 width: "29%",
//                 height: "80%",
//                 marginLeft: 11,
//                 borderColor: COLORS.marketin.backgroundColor,
//                 borderWidth: 0.4,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 borderRadius: 10,
//               }}
//             >
//               <View
//                 style={{
//                   width: "90%",
//                   height: "65%",
//                 }}
//               >
//                 <Image
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain",
//                   }}
//                   source={{
//                     uri: product?.image,
//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   width: "100%",
//                   height: "30%",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Text style={{ fontSize: hp("1.5"), fontWeight: "500" }}>
//                   {product?.price} ₺
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };

import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { COLORS } from "../../../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import marketProductData from "../../data/marketProducts.json";

const MarketCard = ({
  item,
  market_adi,
  market_logo,
  market_yeri,
  market_puan,
}) => {
  const router = useRouter();
  const marketProducts = marketProductData
    ?.filter((market) => market.market_id == item?.id)
    ?.slice(0, 3);

  const goMarket = () => {
    router.push({
      pathname: "/market-details",
      params: { id: item?.id },
    });
  };

  const goProductDetail = (product) => {
    router.push({
      pathname: "/market-product-details",
      params: { id: product?.id },
    });
  };

  return (
    <View
      style={{
        width: "100%",
        marginBottom: hp("1.5"),
        borderWidth: 1,
        borderColor: "#DBE0D9",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          padding: hp("1.5"),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "15%" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 40 }}
              source={{ uri: market_logo }}
            />
          </View>

          <View
            style={{
              width: "82%",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: hp("1.8"), fontWeight: 500 }}>
                  {market_adi}
                  {" - "}
                </Text>
                <Text style={{ fontSize: hp("1.8"), fontWeight: 500 }}>
                  {market_yeri}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: hp("1.8"), fontWeight: 500 }}>
                  {market_puan}{" "}
                  <Ionicons color={"green"} name="star" size={wp("4")} />
                </Text>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: hp("1.6"), fontWeight: 200 }}>
                20-30 dk.
              </Text>
              <Text style={{ fontSize: hp("1.6"), fontWeight: 200 }}>
                Min. 100 TL
              </Text>
              <Text style={{ fontSize: hp("1.6"), fontWeight: 200 }}>
                Başarılı Satıcı{"  "}
                <Ionicons color={"green"} name="ribbon" size={wp("4")} />
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingTop: hp("1"),
          }}
        >
          <Text style={{ fontSize: hp("1.6"), fontWeight: 400 }}>
            Seçili Ürünler
          </Text>
          <TouchableOpacity onPress={goMarket}>
            <Text style={{ fontSize: hp("1.6"), fontWeight: 500 }}>
              Markete Git{"  "}
              <Ionicons
                color={"green"}
                size={wp("4")}
                name="arrow-forward-circle"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          paddingBottom: 10,
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {marketProducts?.map((product, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => goProductDetail(product)}
            style={{
              borderColor: COLORS.marketin.backgroundColor,
              borderWidth: 0.4,
              borderRadius: 10,
              marginLeft: wp("2.1"),
              width: wp("27.5"),
              height: hp("16"),
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: wp("26"),
                height: hp("10"),
                objectFit: "contain",
              }}
              source={{
                uri: product?.image,
              }}
            />

            <View
              style={{
                padding: 10,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                numberOfLines={1}
                style={{ fontSize: hp("1.5"), fontWeight: "500" }}
              >
                {product?.name}
              </Text>
              <Text style={{ fontSize: hp("1.5"), fontWeight: "500" }}>
                {product?.price} ₺
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MarketCard;

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MainHeader from "../../components/headers/main-header";
import { COLORS } from "../../../constants/COLOR";
import { Colors, Drawer, View } from "react-native-ui-lib";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { setUser } from "../../redux/reducers/userSlice";

const ShopBag = () => {
  const SepetData = [
    {
      id: 1,
      name: "Tavuklu Pide Menü",
      price: 95,
      mutfak_id: 7,
      adet: 1,
      image:
        "https://pidemstatik.kolay.site/content/product/img/PIDEM-WEB-SITESI-TAVUKLU-PIDEM-MENU-1200X1200px.jpg",
    },
    {
      id: 2,
      name: "Lahmacun",
      price: 40,
      mutfak_id: 7,
      adet: 1,
      image:
        "https://pidemstatik.kolay.site/content/product/img/PIDEM-WEB-SITESI-LAHMACUN-MENU-1200X1200px.jpg",
    },
  ];

  const user = useSelector((state) => state.userSlice.user);

  const router = useRouter();

  const [sepetData, setSepetData] = useState(SepetData);

  const getToplamTutar = () => {
    let toplamTutar = 19.99;
    sepetData.forEach((item) => {
      toplamTutar += item.price * item.adet;
    });
    return toplamTutar;
  };

  const handleSil = (itemId) => {
    const updatedSepetData = sepetData.filter((item) => item.id !== itemId);
    setSepetData(updatedSepetData);
  };

  const handleDecrease = (itemId) => {
    setSepetData((prevSepetData) => {
      return prevSepetData.map((item) => {
        if (item.id === itemId) {
          const newAdet = Math.max(1, item.adet - 1);
          return { ...item, adet: newAdet };
        }
        return item;
      });
    });
  };

  const handleIncrease = (itemId) => {
    setSepetData((prevSepetData) => {
      return prevSepetData.map((item) => {
        if (item.id === itemId) {
          const newAdet = Math.min(item.stock, item.adet + 1);
          return { ...item, adet: newAdet };
        }
        return item;
      });
    });
  };

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const [showNestedModal, setShowNestedModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const openModal = () => {
    const toplamTutar = getToplamTutar();

    if (user?.username) {
      if (parseFloat(toplamTutar) > 100) {
        setShowNestedModal(true);
      } else {
        alert("Sepetiniz 100 TL Altında", `Toplam Tutar: ${toplamTutar} ₺`);
      }
    } else {
      if (parseFloat(toplamTutar) > 100) {
        alert("Öncelikle Giriş Yapın ve Sipariş Oluşturun");
      } else {
        alert("Öncelikle Giriş Yapın ve Sepetiniz 100 TL Altında");
      }
    }
  };

  const handleSaveCard = () => {
    setShowNestedModal(false);
    setShowBuyModal(false);
    console.log(cardName, cardNumber, cvv, expiryDate, "ödeme alındı");

    const newOrder = sepetData.map((item) => {
      return {
        id: item.id,
        name: item.name,
        adet: item.adet,
        price: item.price,
        total: (item.price * item.adet).toFixed(2),
        image: item.image,
      };
    });

    const currentShopItems = user.shopitems ? [...user.shopitems] : [];

    const updatedShopItems = [...currentShopItems, ...newOrder];

    setUser((prevUser) => ({
      ...prevUser,
      shopitems: updatedShopItems,
    }));

    router.push({
      pathname: "benim-teknolojim/orders",
      params: { orders: newOrder },
    });

    setSepetData([]);
  };

  const closeNestedModal = () => {
    setShowNestedModal(false);
    setShowBuyModal(false);
  };

  const ProductCard = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 110,
          backgroundColor: "white",
          borderColor: COLORS.yemegin.backgroundColor,
          borderWidth: 0.3,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "30%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "70%", objectFit: "contain" }}
              source={{
                uri: item.image,
              }}
            />
          </View>
          <View
            style={{
              width: "40%",
              height: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{ fontSize: hp("1.8"), fontWeight: 600 }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>
              {new Intl.NumberFormat({
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 0,
              }).format(item?.price)}{" "}
              ₺
            </Text>
          </View>

          <View
            style={{
              width: "30%",
              height: "90%",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              onPress={() => handleDecrease(item.id)}
              style={{
                width: "21%",
                height: "25%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                backgroundColor: "#a3a6a2",
              }}
            >
              <Text
                style={{
                  marginBottom: 2,
                  color: "white",
                  fontSize: hp("2.3"),
                  fontWeight: "800",
                }}
              >
                -
              </Text>
            </TouchableOpacity>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: hp("2.5"),
                  fontWeight: "600",
                }}
              >
                {item.adet}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handleIncrease(item.id)}
              style={{
                width: "21%",
                height: "25%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100,
                backgroundColor: "#a3a6a2",
              }}
            >
              <Text
                style={{
                  marginBottom: 2,
                  color: "white",
                  fontSize: hp("2"),
                  fontWeight: "800",
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <View marginT-35 backgroundColor={COLORS.yemegin.backgroundColor}>
        <Text>{""}</Text>
      </View>

      <View>
        <View width={"100%"} height={"91%"}>
          <ScrollView
            bounces={false}
            contentContainerStyle={{
              paddingTop: 50,
              paddingBottom: 50,
            }}
          >
            {SepetData?.map((item, index) => (
              <GestureHandlerRootView key={index}>
                <Drawer
                  style={{
                    marginBottom: 10,
                  }}
                  useNativeAnimations
                  showLeftItem={false}
                  showRightItems
                  rightItems={[
                    {
                      width: wp("18%"),
                      text: "Sil",
                      background: "red",
                      onPress: () => handleSil(item.id),
                    },
                  ]}
                >
                  <ProductCard item={item} />
                </Drawer>
              </GestureHandlerRootView>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            width: "100%",
            height: "20%",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            top: hp("68.5"),
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "orange",
          }}
        >
          <View
            style={{
              width: "90%",
              height: "75%",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <View width={"100%"} height={"20%"} row spread>
              <Text
                style={{
                  color: "white",
                  fontSize: hp("2.1"),
                  fontWeight: "600",
                }}
              >
                Toplam Fiyat:
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: hp("2.1"),
                  fontWeight: "600",
                }}
              >
                {new Intl.NumberFormat({
                  style: "currency",
                  currency: "TRY",
                  maximumFractionDigits: 1,
                }).format(getToplamTutar())}{" "}
                ₺
              </Text>
            </View>

            <View width={"100%"} height={"25%"} row spread>
              <Text
                style={{
                  color: "white",
                  fontSize: hp("2.1"),
                  fontWeight: "200",
                }}
              >
                Teslimat Ücreti:
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: hp("2.1"),
                  fontWeight: "200",
                }}
              >
                19.99 ₺
              </Text>
            </View>

            <View width={"100%"} height={"35%"} center spread>
              <TouchableOpacity
                onPress={openModal}
                style={{
                  paddingHorizontal: 18,
                  paddingVertical: 7,
                  borderRadius: 18,
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: hp("2"),
                    fontWeight: "500",
                  }}
                >
                  Sepeti Onayla
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Modal visible={showNestedModal} animationType="slide" transparent={true}>
        <View style={styles.nestedModalContainer}>
          <View style={styles.nestedModalContent}>
            <View style={styles.modalContext}>
              <Text style={styles.modalTitlex}>Ödeme Bilgilerinizi Girin</Text>
              <TextInput
                style={styles.input}
                value={cardName}
                onChangeText={(text) => setCardName(text)}
                placeholder="Kart Adı"
              />
              <TextInput
                style={styles.input}
                value={cardNumber}
                onChangeText={(text) => setCardNumber(text)}
                placeholder="Kart Numarası"
                keyboardType="numeric"
                maxLength={19}
              />
              <TextInput
                style={styles.input}
                value={cvv}
                onChangeText={(text) => setCvv(text)}
                placeholder="Cvv"
                keyboardType="numeric"
                maxLength={3}
              />
              <TextInput
                style={styles.input}
                value={expiryDate}
                onChangeText={(text) => setExpiryDate(text)}
                placeholder="Son Kullanma Tarihi"
                keyboardType="numeric"
                maxLength={5}
              />
              <TouchableOpacity style={styles.button} onPress={handleSaveCard}>
                <Text style={styles.buttonText}>Ödemeyi Tamamla</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.nestedModalCloseButton}
              onPress={closeNestedModal}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <MainHeader
        close
        backgroundColor={COLORS.yemegin.tabIconColor}
        name="Yemeğim"
        logo={require("../../../assets/image/burger.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  nestedModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  nestedModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  nestedModalText: {
    fontSize: hp("2.2"),
    fontWeight: "600",
    marginBottom: 10,
  },
  nestedModalCloseButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContext: {
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitlex: {
    fontSize: hp("1.8"),
    fontWeight: "700",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 250,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: hp("1.6"),
  },
});

export default ShopBag;

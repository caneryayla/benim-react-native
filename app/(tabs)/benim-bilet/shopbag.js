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
import { Drawer, View } from "react-native-ui-lib";
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
      konser_adi: "Rock Fest",
      tarih: "15 Mart",
      saat: "19:00",
      yer: "Stadyum A",
      şehir: "İstanbul",
      konser_img:
        "https://images.themagger.net/wp-content/uploads/2019/01/Istanbul-Konserleri-633x433.jpeg",
      sanatçılar: ["Guns N' Roses", "Metallica"],
      biletim: {
        kategori_adi: "Normal",
        fiyat: 300,
      },
    },
    {
      id: 2,
      konser_adi: "Pop Night",
      tarih: "05 Eylül",
      saat: "20:30",
      yer: "Arena B",
      şehir: "Ankara",
      konser_img:
        "https://images.themagger.net/wp-content/uploads/2010/01/Uniq-%C4%B0stanbul-633x355.jpg",
      sanatçılar: ["Taylor Swift", "Ed Sheeran", "Dua Lipa"],
      biletim: {
        kategori_adi: "VIP",
        fiyat: 400,
      },
    },
    {
      id: 3,
      konser_adi: "Jazz Fest",
      tarih: "12 Aralık",
      saat: "18:00",
      yer: "Opera House",
      şehir: "İzmir",
      konser_img:
        "https://www.alanya.bel.tr/Photos/News/Big/146730720225545168.JPG",
      sanatçılar: ["John Coltrane Quartet", "Ella Fitzgerald", "Miles Davis"],
      biletim: {
        kategori_adi: "VIP",
        fiyat: 550,
      },
    },
  ];

  const user = useSelector((state) => state.userSlice.user);

  const router = useRouter();

  const [sepetData, setSepetData] = useState(SepetData);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const [showNestedModal, setShowNestedModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const getToplamTutar = () => {
    let toplamTutar = 0;
    sepetData.forEach((item) => {
      toplamTutar += item.biletim.fiyat;
    });
    return toplamTutar.toFixed(2);
  };

  const handleSil = (itemId) => {
    const updatedSepetData = sepetData.filter((item) => item.id !== itemId);
    setSepetData(updatedSepetData);
  };

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

    console.log(newOrder);

    router.push({
      pathname: "benim-bilet/orders",
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
          borderColor: COLORS.biletin.backgroundColor2,
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
              width: 100,
              height: 90,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 10,
              }}
              source={{
                uri: item.konser_img,
              }}
            />
          </View>
          <View
            style={{
              width: "67%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>
              {item.konser_adi}
            </Text>
            <Text style={{ fontSize: hp("1.8"), fontWeight: 600 }}>
              {item.biletim.kategori_adi} - {item.biletim.fiyat}₺
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View width={"100%"} height={"100%"} backgroundColor="white">
      <View marginT-35 backgroundColor={COLORS.biletin.backgroundColor2}>
        <Text>{""}</Text>
      </View>

      <View>
        <View width={"100%"} height={"91%"}>
          <ScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 50,
              paddingBottom: 35,
            }}
          >
            {sepetData?.map((item, index) => (
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
            height: "14%",
            position: "absolute",
            top: hp("73"),
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.biletin.backgroundColor2,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <View width={"90%"} spread row>
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
              {getToplamTutar()} ₺
            </Text>
          </View>

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
        backgroundColor={COLORS.biletin.backgroundColor2}
        name="Biletim"
        logo={require("../../../assets/image/voucher.png")}
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
    backgroundColor: COLORS.biletin.backgroundColor2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ShopBag;

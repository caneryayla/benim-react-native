import React, { useState } from "react";
import { View } from "react-native-ui-lib";
import TitleHeader from "./components/headers/title-header";
import {
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { useLocalSearchParams, useRouter } from "expo-router";

import BiletDetailData from "./data/bilet.json";
import { useSelector } from "react-redux";

const EventDetails = ({}) => {
  const router = useRouter();

  const user = useSelector((state) => state.userSlice.user);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showNestedModal, setShowNestedModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSaveCard = () => {
    setShowModal(false);
    setShowNestedModal(false);
    setShowBuyModal(true);
    console.log(cardName, cardNumber, cvv, expiryDate, "ödeme alındı");
  };

  const handleGoTicket = () => {
    setShowBuyModal(false);

    router.push({
      pathname: "benim-bilet",
    });
  };

  const proceedToPayment = () => {
    if (selectedCategory === "VIP") {
      console.log("VIP kategorisi için ödeme işlemleri");
    } else if (selectedCategory === "Normal") {
      console.log("Normal kategorisi için ödeme işlemleri");
    } else {
      console.log("Lütfen bir kategori seçin");
    }
    setShowNestedModal(true);
    setShowModal(false);
  };

  const closeNestedModal = () => {
    setShowNestedModal(false);
    setShowModal(false);
    setShowBuyModal(false);
  };

  const formatCardInput = (input) => {
    const digitsOnly = input.replace(/\D/g, "");

    const formattedInput = digitsOnly.match(/.{1,4}/g)?.join(" ") || "";

    return formattedInput;
  };

  const formatCvvInput = (input) => {
    const digitsOnly = input.replace(/\D/g, "");

    const formattedInput = digitsOnly.slice(0, 3);

    return formattedInput;
  };

  const formatExpiryDateInput = (value) => {
    const formattedValue = value.replace(/[^0-9]/g, "");
    let formattedDate = "";

    if (formattedValue.length > 0) {
      formattedDate += formattedValue.substring(0, 2);

      if (formattedValue.length > 2) {
        formattedDate += "/" + formattedValue.substring(2, 4);
      }

      if (formattedValue.length > 4) {
        formattedDate = formattedDate.substring(0, 5);
      }
    }

    return formattedDate;
  };

  const { id } = useLocalSearchParams();

  const biletDetail = BiletDetailData?.filter((item) => item.konserId == id);

  console.log(biletDetail);

  return (
    <View backgroundColor="white">
      {biletDetail?.map((item, index) => (
        <View width={"100%"} height={"100%"} key={index}>
          <View style={styles.container}>
            <Image
              source={{ uri: item.konser_img }}
              style={styles.backgroundImage}
            />
          </View>

          <ScrollView bounces={false}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#141414",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <View
                row
                style={{
                  marginTop: 20,
                  width: "91%",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: "75%",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontSize: hp("2"), fontWeight: "500" }}>
                    {item.konser_adı}
                  </Text>
                  <Text style={{ fontSize: hp("1.8"), fontWeight: "200" }}>
                    {item.yer},{item.şehir}
                  </Text>
                </View>
                <View
                  style={{
                    width: "25%",
                    backgroundColor: "black",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: hp("2"),
                      fontWeight: "600",
                    }}
                  >
                    {item.biletler[0].kategoriler[0].fiyat} ₺
                  </Text>
                </View>
              </View>

              <View
                row
                style={{
                  width: "91%",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Text style={{ fontSize: hp("2"), fontWeight: "500" }}>
                    {item.tarih} - {item.saat}
                  </Text>
                </View>

                <View
                  style={{
                    padding: 7,
                    backgroundColor: "black",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: 10,
                    marginBottom: 5,
                  }}
                >
                  <Ionicons
                    color="white"
                    name="calendar-outline"
                    size={hp("2.5")}
                  />
                </View>
              </View>

              <View
                row
                style={{
                  width: "91%",
                }}
              >
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <Text style={{ fontSize: hp("2"), fontWeight: "500" }}>
                    Sanatçılar:
                    <Text style={{ fontSize: hp("1.8"), fontWeight: "200" }}>
                      {" "}
                      {item.sanatçılar}
                    </Text>
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "91%",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: hp("2"),
                    fontWeight: "500",
                    marginBottom: 5,
                  }}
                >
                  Açıklama
                </Text>
                <Text style={{ fontSize: hp("1.8"), fontWeight: "200" }}>
                  Bu muhteşem konserde enerjik performansları ile sizleri
                  büyüleyecekler. Harika atmosfer için bu konseri kaçırmayın!
                </Text>
              </View>

              <View
                style={{
                  width: "100%",
                  height: 190,
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <View width={"91%"}>
                  <Text style={{ fontSize: hp("2"), fontWeight: "500" }}>
                    Konum📍
                  </Text>
                </View>
                <View width={"100%"} height={"100%"}>
                  <MapView
                    style={styles.map}
                    initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      ))}
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: hp("3"),
        }}
        width={"100%"}
      >
        {user ? (
          <TouchableOpacity
            onPress={openModal}
            disabled={selectedCategory !== null}
            style={{
              backgroundColor: "black",
              borderRadius: 50,
              paddingHorizontal: 25,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{ fontSize: hp("2"), color: "white", fontWeight: 700 }}
            >
              Satın Al
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Giriş Yap",
                "Satın almak için önce giriş yapmalısınız."
              );
            }}
            style={{
              backgroundColor: "black",
              borderRadius: 50,
              paddingHorizontal: 25,
              paddingVertical: 10,
            }}
          >
            <Text
              style={{ fontSize: hp("2"), color: "white", fontWeight: 700 }}
            >
              Satın Al
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Kategori Seçin</Text>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === "VIP" && { backgroundColor: "#E8E8E8" },
              ]}
              onPress={() => selectCategory("VIP")}
            >
              <Text style={styles.categoryButtonText}>VIP</Text>
              <Text style={styles.categoryButtonText}>800 ₺</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === "Normal" && {
                  backgroundColor: "#E8E8E8",
                },
              ]}
              onPress={() => selectCategory("Normal")}
            >
              <Text style={styles.categoryButtonText}>Normal</Text>
              <Text style={styles.categoryButtonText}>300 ₺</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.proceedButton}
              onPress={proceedToPayment}
              disabled={!selectedCategory}
            >
              <Text style={styles.proceedButtonText}>Devam Et</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={showNestedModal} animationType="slide" transparent={true}>
        <View style={styles.nestedModalContainer}>
          <View style={styles.nestedModalContent}>
            <Text style={styles.nestedModalText}>
              Seçilen Kategori: {selectedCategory}
            </Text>
            {selectedCategory === "VIP" && (
              <View style={styles.modalContext}>
                <Text style={styles.modalTitlex}>
                  Ödeme Bilgilerinizi Girin
                </Text>
                <TextInput
                  style={styles.input}
                  value={cardName}
                  onChangeText={(text) => setCardName(text)}
                  placeholder="Kart Adı"
                />
                <TextInput
                  style={styles.input}
                  value={formatCardInput(cardNumber)}
                  onChangeText={(text) =>
                    setCardNumber(text.replace(/\D/g, "").substring(0, 19))
                  }
                  placeholder="Kart Numarası"
                  keyboardType="numeric"
                  maxLength={19}
                />
                <TextInput
                  style={styles.input}
                  value={formatCvvInput(cvv)}
                  onChangeText={(text) =>
                    setCvv(text.replace(/\D/g, "").substring(0, 3))
                  }
                  placeholder="Cvv"
                  keyboardType="numeric"
                  maxLength={3}
                />
                <TextInput
                  style={styles.input}
                  value={formatExpiryDateInput(expiryDate)}
                  onChangeText={(text) =>
                    setExpiryDate(formatExpiryDateInput(text))
                  }
                  placeholder="Son Kullanma Tarihi"
                  keyboardType="numeric"
                  maxLength={5}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSaveCard}
                >
                  <Text style={styles.buttonText}>Ödemeyi Tamamla</Text>
                </TouchableOpacity>
              </View>
            )}
            {selectedCategory === "Normal" && (
              <View style={styles.modalContext}>
                <Text style={styles.modalTitlex}>
                  Ödeme Bilgilerinizi Girin
                </Text>
                <TextInput
                  style={styles.input}
                  value={""}
                  placeholder="Kart Adı"
                />
                <TextInput
                  style={styles.input}
                  value={""}
                  placeholder="Kart Numarası"
                  keyboardType="numeric"
                  maxLength={19}
                />
                <TextInput
                  style={styles.input}
                  value={""}
                  placeholder="Cvv"
                  keyboardType="numeric"
                  maxLength={3}
                />
                <TextInput
                  style={styles.input}
                  value={""}
                  placeholder="Son Kullanma Tarihi"
                  keyboardType="numeric"
                  maxLength={5}
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSaveCard}
                >
                  <Text style={styles.buttonText}>Ödemeyi Tamamla</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity
              style={styles.nestedModalCloseButton}
              onPress={closeNestedModal}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={showBuyModal} animationType="slide" transparent={true}>
        <View style={styles.nestedModalContainer}>
          <View style={styles.nestedModalContent}>
            <Text style={styles.nestedModalText}>
              Ödemeniz başarı ile gerçekleşti
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleGoTicket}>
              <Text style={styles.buttonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TitleHeader title="Konser Detayları" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 430,
    alignItems: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  map: {
    width: "100%",
    height: "100%",
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 50,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: hp("2"),
    fontWeight: "600",
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  buyButton: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 14,
    borderRadius: 50,
    marginBottom: 20,
  },
  buyButtonText: {
    color: "white",
    fontWeight: "700",
  },
  proceedButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  proceedButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: hp("1.8"),
  },
  nestedModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  nestedModalContent: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  nestedModalText: {
    fontSize: hp("1.8"),
    fontWeight: "600",
    marginBottom: 0,
  },
  nestedModalCloseButton: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: hp("1.8"),
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
    fontSize: hp("1.5"),
    fontWeight: "200",
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
    backgroundColor: "black",
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

export default EventDetails;

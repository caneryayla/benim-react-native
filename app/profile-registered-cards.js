import React, { useState } from "react";
import { Text, TouchableOpacity, Modal, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import Lottie from "lottie-react-native";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants/COLOR";
import { setUser } from "./redux/reducers/userSlice";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ProfileRegisteredCards = () => {
  const user = useSelector((state) => state.userSlice.user);
  const paymentInfos = user.payment_infos || [];

  const [isModalVisible, setModalVisible] = useState(false);

  const [editedCard, setEditedCard] = useState({
    cardId: null,
    cardName: "",
    card_number: "",
    expiry_date: "",
    cvv: "",
    active: false,
  });

  const dispatch = useDispatch();

  const handleDeleteCard = (cardId) => {
    const updatedPaymentInfos = paymentInfos.filter(
      (card) => card.cardId !== cardId
    );
    const updatedUser = { ...user, payment_infos: updatedPaymentInfos };
    dispatch(setUser(updatedUser));
  };

  const handleEditCard = (card) => {
    setEditedCard(card);
    setModalVisible(true);
  };

  const handleSaveCard = () => {
    if (editedCard) {
      const updatedPaymentInfos = paymentInfos.map((card) => {
        if (card.cardId === editedCard.cardId) {
          return {
            ...card,
            cardName: editedCard.cardName,
            card_number: editedCard.card_number,
            cvv: editedCard.cvv,
            expiry_date: editedCard.expiry_date,
          };
        }
        return card;
      });

      const updatedUser = { ...user, payment_infos: updatedPaymentInfos };
      dispatch(setUser(updatedUser));
      setModalVisible(false);
    }
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

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View center marginT-30>
        <Lottie
          style={{
            width: 250,
            height: 250,
          }}
          source={require("../assets/animations/visa-card.json")}
        />

        {paymentInfos.map((card) => (
          <View key={card.cardId} style={styles.cardContainer}>
            <Text style={styles.cardName}>Kart Adı: {card.cardName}</Text>
            <Text style={styles.cardNumber}>
              Kart Numarası: {card.card_number}
            </Text>
            <Text style={styles.cardExpiryDate}>Cvv: {card.cvv}</Text>
            <Text style={styles.cardExpiryDate}>
              Son Kullanma Tarihi: {card.expiry_date}
            </Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => handleEditCard(card)}
              >
                <FontAwesome
                  name="pencil"
                  size={19}
                  color={COLORS.app.appColor}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteCard(card.cardId)}>
                <FontAwesome
                  name="trash-o"
                  size={19}
                  color={COLORS.app.appColor}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Kart Bilgilerini Düzenle</Text>
            <TextInput
              style={styles.input}
              value={editedCard ? editedCard.cardName : ""}
              onChangeText={(text) =>
                setEditedCard({ ...editedCard, cardName: text })
              }
              placeholder="Kart Adı"
            />
            <TextInput
              style={styles.input}
              value={formatCardInput(editedCard.card_number)}
              onChangeText={(text) =>
                setEditedCard({
                  ...editedCard,
                  card_number: formatCardInput(text),
                })
              }
              placeholder="Kart Numarası"
              keyboardType="numeric"
              maxLength={19}
            />
            <TextInput
              style={styles.input}
              value={formatCvvInput(editedCard.cvv)}
              onChangeText={(text) =>
                setEditedCard({ ...editedCard, cvv: formatCvvInput(text) })
              }
              placeholder="Cvv"
              keyboardType="numeric"
              maxLength={3}
            />
            <TextInput
              style={styles.input}
              value={formatExpiryDateInput(editedCard?.expiry_date)}
              onChangeText={(text) =>
                setEditedCard({
                  ...editedCard,
                  expiry_date: formatExpiryDateInput(text),
                })
              }
              placeholder="Son Kullanma Tarihi"
              keyboardType="numeric"
              maxLength={5}
            />
            <TouchableOpacity style={styles.button} onPress={handleSaveCard}>
              <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TitleHeader goBack title="Kayıtlı Kartlarım" />
    </View>
  );
};

const styles = {
  cardContainer: {
    borderRadius: 15,
    padding: hp("2"),
    marginBottom: hp("1.5"),
    borderWidth: 2.5,
    borderColor: COLORS.app.appColor2,
  },
  cardName: {
    fontWeight: "bold",
  },
  cardNumber: {
    marginTop: 5,
    fontWeight: "bold",
  },
  cardExpiryDate: {
    marginTop: 5,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: COLORS.app.appColor,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
};

export default ProfileRegisteredCards;

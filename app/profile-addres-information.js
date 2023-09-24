import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/userSlice";
import TitleHeader from "./components/headers/title-header";
import { View } from "react-native-ui-lib";
import { COLORS } from "../constants/COLOR";
import { FontAwesome } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import Lottie from "lottie-react-native";

const AddressSelectionScreen = () => {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();

  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [editedAddress, setEditedAddress] = useState(null);

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  const handleAddressSelect = (addressId) => {
    setSelectedAddressId(addressId);
    const updatedUser = {
      ...user,
      addresses: user.addresses.map((address) => {
        return {
          ...address,
          active: address.addressId === addressId,
        };
      }),
    };
    dispatch(setUser(updatedUser));
  };

  const handleEditAddress = (address) => {
    setEditedAddress(address);
    setModalVisible(true);
  };

  const handleSaveAddress = async () => {
    if (editedAddress) {
      const updatedAddresses = user.addresses.map((address) => {
        if (address.addressId === editedAddress.addressId) {
          return {
            ...address,
            address_name: editedAddress.address_name,
            address: editedAddress.address,
            county: editedAddress.county,
            city: editedAddress.city,
            country: editedAddress.country,
            postal_code: editedAddress.postal_code,
          };
        }
        return address;
      });

      const updatedUser = {
        ...user,
        addresses: updatedAddresses,
      };

      try {
        const fileUri = `${FileSystem.documentDirectory}user.json`;
        await FileSystem.writeAsStringAsync(
          fileUri,
          JSON.stringify(updatedUser)
        );
        dispatch(setUser(updatedUser));
        setModalVisible(false);
      } catch (error) {
        console.error("Error updating address:", error);
      }
    }
  };

  const handleDeleteAddress = (addressId) => {
    const updatedAddresses = user.addresses.filter(
      (address) => address.addressId !== addressId
    );
    dispatch(setUser({ ...user, addresses: updatedAddresses }));
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: "27%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          paddingHorizontal: 20,
        }}
      >
        <View center width={"100%"}>
          <Lottie
            style={{
              width: "90%",
              height: "90%",
            }}
            source={require("../assets/animations/location.json")}
          />
        </View>
        <View width={"100%"}>
          {user.addresses.map((address) => (
            <TouchableOpacity
              key={address.addressId}
              style={[
                styles.addressContainer,
                address.active && styles.selectedAddress,
              ]}
              onPress={() => handleAddressSelect(address.addressId)}
            >
              <Text style={styles.addressText}>{address.address_name}</Text>

              <View style={styles.radioContainer}>
                {address.active && <View style={styles.radioInnerCircle} />}
              </View>
              <TouchableOpacity
                style={{ marginRight: 8 }}
                onPress={() => handleEditAddress(address)}
              >
                <FontAwesome
                  name="pencil"
                  size={18}
                  color={COLORS.app.appColor}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteAddress(address.addressId)}
              >
                <FontAwesome
                  name="trash"
                  size={19}
                  color={COLORS.app.appColor}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adres Düzenle</Text>
            <TextInput
              style={styles.input}
              value={editedAddress ? editedAddress.address_name : ""}
              onChangeText={(text) =>
                setEditedAddress({ ...editedAddress, address_name: text })
              }
              placeholder="Adres Adı"
            />
            <TextInput
              style={styles.input}
              value={editedAddress ? editedAddress.country : ""}
              onChangeText={(text) =>
                setEditedAddress({ ...editedAddress, country: text })
              }
              placeholder="Ülke"
            />
            <TextInput
              style={styles.input}
              value={editedAddress ? editedAddress.city : ""}
              onChangeText={(text) =>
                setEditedAddress({ ...editedAddress, city: text })
              }
              placeholder="Şehir"
            />
            <TextInput
              style={styles.input}
              value={editedAddress ? editedAddress.county : ""}
              onChangeText={(text) =>
                setEditedAddress({ ...editedAddress, county: text })
              }
              placeholder="İlçe"
            />
            <TextInput
              style={styles.input}
              value={editedAddress ? editedAddress.address : ""}
              onChangeText={(text) =>
                setEditedAddress({ ...editedAddress, address: text })
              }
              placeholder="Adres"
            />
            <TouchableOpacity style={styles.button} onPress={handleSaveAddress}>
              <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TitleHeader goBack title="Adres Bilgilerim" />
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
  },
  radioContainer: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.app.appColor,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.app.appColor,
  },
  selectedAddress: {
    backgroundColor: "#e6f3ff",
  },
  addressText: {
    flex: 1,
    fontSize: 16,
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
});

export default AddressSelectionScreen;

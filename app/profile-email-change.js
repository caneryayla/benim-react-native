import TitleHeader from "./components/headers/title-header";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { COLORS } from "../constants/COLOR";
import { View } from "react-native-ui-lib";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/userSlice";

const ProfileMailChange = () => {
  const route = useRouter();

  const user = useSelector((state) => state.userSlice.user);

  const dispatch = useDispatch();

  const [email, setEmail] = useState(user?.email);
  const [newEmail, setNewEmail] = useState("");

  const handleSave = () => {
    const updatedUser = { ...user, email: newEmail };
    dispatch(setUser(updatedUser));
    console.log("Güncellenmiş Kullanıcı:", updatedUser);
  };

  useEffect(() => {
    dispatch(setUser(user));
    console.log(user);
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View marginT-80 paddingH-25>
        <View
          style={{
            width: "100%",
            height: "25%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Lottie
            autoPlay
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/animations/mail.json")}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-Posta:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Yeni E-Posta:</Text>
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Yeni E-Posta(Re):</Text>
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TitleHeader goBack title="E-Posta Değiştir" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    width: 95,
    fontWeight: 500,
  },
  input: {
    flex: 1,
    borderWidth: 0.8,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 12,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#3498db",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  radioButtonSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  radioInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.app.appColor,
  },
  radioLabel: {
    marginLeft: 5,
  },
  button: {
    backgroundColor: COLORS.app.appColor,
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: 500,
    fontSize: 16,
  },
});

export default ProfileMailChange;

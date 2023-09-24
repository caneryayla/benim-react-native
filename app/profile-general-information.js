import TitleHeader from "./components/headers/title-header";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../constants/COLOR";
import { View } from "react-native-ui-lib";
import Lottie from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/userSlice";

const MainUserGeneralInformation = () => {
  const route = useRouter();

  const user = useSelector((state) => state.userSlice.user);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user?.username);
  const [lastName, setLastName] = useState(user?.usersurname);
  const [age, setAge] = useState(user?.age);
  const [gender, setGender] = useState(user?.gender);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      username: firstName,
      usersurname: lastName,
      age: age,
      gender: gender,
    };

    dispatch(setUser(updatedUser));
    console.log("Kaydedildi:", updatedUser);
  };

  useEffect(() => {
    dispatch(setUser(user));
    console.log(user);
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <TitleHeader goBack title="Genel Bilgilerim" />
      <View marginT-60 paddingH-25>
        <View
          style={{
            width: "100%",
            height: "33%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Lottie
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/animations/user-info.json")}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Ad:</Text>
            <TextInput
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Soyad:</Text>
            <TextInput
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Yaş:</Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ""))}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cinsiyet:</Text>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  gender === "Erkek" && styles.radioButtonSelected,
                ]}
                onPress={() => setGender("Erkek")}
              >
                {gender === "Erkek" && <View style={styles.radioInnerCircle} />}
              </TouchableOpacity>
              <Text style={styles.radioLabel}>Erkek</Text>
            </View>
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  gender === "Kadın" && styles.radioButtonSelected,
                ]}
                onPress={() => setGender("Kadın")}
              >
                {gender === "Kadın" && <View style={styles.radioInnerCircle} />}
              </TouchableOpacity>
              <Text style={styles.radioLabel}>Kadın</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    width: 80,
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

export default MainUserGeneralInformation;

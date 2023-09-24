import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { View } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/userSlice";
import { Ionicons } from "@expo/vector-icons";
import Lottie from "lottie-react-native";
import TitleHeader from "./components/headers/title-header";
import { useRouter } from "expo-router";

const ProfilePasswordChange = () => {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();

  const router = useRouter();

  const [password, setPassword] = useState(user?.password);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRe, setNewPasswordRe] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryNew, setSecureTextEntryNew] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSave = () => {
    if (newPassword !== newPasswordRe) {
      setPasswordMatchError(true);
      return;
    }

    if (newPassword.length < 5 || newPassword.length > 15) {
      setValidationError("Şifre 5 ila 15 karakter arasında olmalıdır.");
      return;
    }

    const updatedUser = { ...user, password: newPassword };
    dispatch(setUser(updatedUser));
    router.back();
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
            height: "27%",
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
            source={require("../assets/animations/password.json")}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Şifre:</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntry(!secureTextEntry)}
              style={styles.eyeIconContainer}
            >
              <Ionicons
                name={secureTextEntry ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Yeni Şifre:</Text>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={secureTextEntryNew}
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntryNew(!secureTextEntryNew)}
              style={styles.eyeIconContainer}
            >
              <Ionicons
                name={secureTextEntryNew ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Yeni Şifre (Re):</Text>
            <TextInput
              style={styles.input}
              value={newPasswordRe}
              onChangeText={setNewPasswordRe}
              secureTextEntry={secureTextEntryConfirm}
            />
            <TouchableOpacity
              onPress={() => setSecureTextEntryConfirm(!secureTextEntryConfirm)}
              style={styles.eyeIconContainer}
            >
              <Ionicons
                name={secureTextEntryConfirm ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          {passwordMatchError && (
            <Text style={styles.errorText}>
              Şifreler uyuşmuyor, lütfen kontrol edin.
            </Text>
          )}
          {validationError !== "" && (
            <Text style={styles.errorText}>{validationError}</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TitleHeader goBack title="Şifre Değiştir" />
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    marginTop: 10,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10,
  },
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
    fontWeight: "500",
  },
  input: {
    flex: 1,
    borderWidth: 0.8,
    borderColor: "#ccc",
    padding: 14,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 8,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProfilePasswordChange;

import React, { useState } from "react";
import { Text, TextInput, StyleSheet, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Button, View } from "react-native-ui-lib";
import { COLORS } from "../constants/COLOR";
import { useRouter } from "expo-router";
import users from "./data/user.json";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/reducers/userSlice";

const LoginScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("kullanici1@gmail.com");
  const [password, setPassword] = useState("12345678");

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Email:", email);
      console.log("Password:", password);
      dispatch(setUser(user));
      console.log(user);
      router.push("home");
    } else {
      console.log("Hatalı e-posta veya şifre");
    }
  };

  return (
    <View style={styles.container}>
      <View center width={"100%"} height={"15%"}>
        <Image
          resizeMode="contain"
          style={{ width: "70%", height: "100%" }}
          source={require("../assets/image/app-image2.png")}
        />
      </View>

      <View
        style={{
          alignItems: "flex-start",
          justifyContent: "center",
        }}
        width={"100%"}
        height={"40%"}
      >
        <Text style={styles.label}>E-posta:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-posta adresinizi girin"
        />
        <Text style={styles.label}>Şifre:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Şifrenizi girin"
          secureTextEntry
        />
        <Button
          adjustsFontSizeToFit
          marginV-10
          borderRadius={hp("1%")}
          style={{
            height: hp("5.4%"),
            width: "100%",
          }}
          labelStyle={{ fontSize: hp("1.8"), textAlign: "center" }}
          enableShadow
          label="Giriş Yap"
          backgroundColor={COLORS.app.appColor}
          onPress={handleLogin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  label: {
    fontSize: hp("1.8"),
    marginBottom: 10,
    marginLeft: 2,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default LoginScreen;

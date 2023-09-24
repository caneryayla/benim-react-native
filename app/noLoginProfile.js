import React from "react";
import { Text, SafeAreaView, Image, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { Link } from "expo-router";
import { COLORS } from "../constants/COLOR";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const NoLoginProfile = ({ butonColor }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          paddingHorizontal: 25,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.textContainer}>
          <Text style={{ fontSize: 28, fontWeight: "600" }}>
            Giriş Yap ya da Kaydol
          </Text>
        </View>
        <View style={styles.textContainer2}>
          <Text style={styles.text}>
            Devam etmek için uygulamaya giriş yap ya da kaydol.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/image/b1.png")}
            resizeMode="contain"
          />
        </View>

        <View
          style={{
            backgroundColor: butonColor ? butonColor : COLORS.app.appColor,
            paddingVertical: 12,
            borderRadius: 10,
            width: "100%",
            marginTop: 50,
          }}
        >
          <Link href={"login"}>
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer2: {
    width: "70%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontWeight: "600",
    fontSize: 15,
    textAlign: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: hp("1.8"),
    textAlign: "center",
  },
});

export default NoLoginProfile;

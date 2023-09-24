import React, { useState } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { COLORS } from "../../../constants/COLOR";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const EventCard = ({ item, name, date, city, time, photo }) => {
  const router = useRouter();

  const [like, setLike] = useState(false);

  const handleLikeButton = () => {
    setLike(!like);
  };

  const handleCardPress = () => {
    router.push({
      pathname: "event-details",
      params: { id: item?.id },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleCardPress}
        style={{
          width: "100%",
          height: "77%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{ uri: photo }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={handleLikeButton}
          style={{
            position: "absolute",
            backgroundColor: COLORS.biletin.backgroundColor2,
            width: "12%",
            height: "20%",
            borderRadius: 10,
            right: 10,
            top: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            size={wp("7")}
            color={"white"}
            name={like ? "heart" : "heart-outline"}
          />
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <View style={styles.detailTop}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.city}>{city}</Text>
        </View>

        <View style={styles.detailBottom}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.date}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    backgroundColor: "black",
    borderRadius: 10,
    marginBottom: 10,
  },

  detailsContainer: {
    width: "100%",
    height: "22%",
    flexDirection: "row",
    justifyContent: "center",
  },

  detailBottom: {
    width: "45%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },

  detailTop: {
    width: "45%",
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },

  name: {
    color: "white",
    fontWeight: "800",
  },
  date: {
    color: "white",
    fontWeight: "800",
  },
  city: {
    color: "white",
    fontWeight: "800",
  },
});

export default EventCard;

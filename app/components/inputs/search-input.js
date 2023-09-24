import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TextField } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";

const SearchInput = ({ color, value, onChange, placeholder }) => {
  return (
    <TextField
      fieldStyle={{
        backgroundColor: "white",
        height: wp("9"),
        borderRadius: hp("1.5"),
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 0.4,
        borderColor: "gray",
      }}
      style={{ color: color }}
      leadingAccessory={
        <Ionicons
          name="search"
          color={color}
          size={hp("2")}
          style={{ marginRight: wp("1") }}
        />
      }
      placeholder={placeholder}
      placeholderTextColor={color}
      value={value}
      onChangeText={(text) => onChange && onChange(text)}
    />
  );
};

export default SearchInput;

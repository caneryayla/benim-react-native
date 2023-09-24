import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TextField } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants/COLOR";

const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <TextField
      fieldStyle={{
        backgroundColor: "red",
        height: hp("6"),
        borderRadius: hp("1.5"),
        paddingHorizontal: 25,
      }}
      style={{ color: COLORS.app.titleColor }}
      leadingAccessory={
        <Ionicons
          name="search"
          color={COLORS.app.titleColor}
          size={hp("2.5")}
          style={{ marginRight: 10 }}
        />
      }
      placeholder={placeholder}
      placeholderTextColor={COLORS.app.titleColor}
      value={value}
      onChangeText={(text) => onChange && onChange(text)}
    />
  );
};

export default SearchInput;

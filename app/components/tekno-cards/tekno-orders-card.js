import React from "react";
import { useRouter } from "expo-router";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native-ui-lib";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Text } from "react-native";

const Container = styled.View((props) => ({
  width: "100%",
  backgroundColor: "white",
  marginBottom: 15,
  borderWidth: 1,
  borderColor: "#DBE0D9",
  borderRadius: 10,
}));

const Header = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 15,
  paddingBottom: 10,
});

const TopHeader = styled.View({
  flexDirection: "row",
  justifyContent: "flex-start",
  paddingHorizontal: 15,
  paddingTop: 10,
});

const ProductsScrollContainer = styled.ScrollView({
  width: "87%",
});

const ProductDetailButton = styled.TouchableOpacity({
  width: "13%",
  alignItems: "center",
});

const ProductItemContainer = styled.TouchableOpacity({
  width: 70,
  height: 90,
  borderRadius: 15,
  borderWidth: 1,
  borderColor: "#DBE0D9",
  marginRight: 10,
});

const ProductItemImage = styled.Image({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

const OrderNo = styled.Text({
  fontSize: hp("1.7"),
  fontWeight: "300",
  marginTop: 3,
});

const OrderStatus = styled.Text({});

const TeknoOrdersCard = ({ item }) => {
  const router = useRouter();

  const productPress = (item) => {
    router.push({
      pathname: "/tekno-product-details",
      params: { id: item?.urunId },
    });
  };

  const orderDetail = (item) => {
    router.push({
      pathname: "/tekno-order-detail",
      params: { id: item?.siparisId },
    });
  };

  const urunler = item?.urunler || [];

  const uniqueMarkaNames = [];
  urunler.forEach((item) => {
    if (item && item.markaName && !uniqueMarkaNames.includes(item.markaName)) {
      uniqueMarkaNames.push(item.markaName);
    }
  });

  console.log(item.urunler[0]);

  return (
    <Container>
      <TopHeader row>
        <Text>Satıcı : </Text>
        {uniqueMarkaNames.map((markaName, index) => (
          <Text style={{ fontWeight: 500 }} key={index}>
            {markaName}{" "}
          </Text>
        ))}
      </TopHeader>
      <Header>
        <View>
          <OrderNo>Sipariş No : #{item?.siparisNo}</OrderNo>
          <OrderNo>
            {item?.siparisTarih} - {item?.siparisSaati}
          </OrderNo>
        </View>
      </Header>
      <View center row>
        <ProductsScrollContainer
          horizontal
          contentContainerStyle={{ paddingLeft: 14, paddingBottom: 14 }}
        >
          {item?.urunler?.map((item, index) => (
            <ProductItemContainer
              onPress={() => productPress(item)}
              key={index}
            >
              <ProductItemImage source={{ uri: item?.urunImage }} />
            </ProductItemContainer>
          ))}
        </ProductsScrollContainer>
        <ProductDetailButton onPress={() => orderDetail(item)}>
          <Ionicons size={wp("6")} name="caret-forward-outline" />
        </ProductDetailButton>
      </View>
    </Container>
  );
};

export default TeknoOrdersCard;

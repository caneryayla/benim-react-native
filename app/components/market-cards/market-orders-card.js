import React from "react";
import { useRouter } from "expo-router";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native-ui-lib";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

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
  padding: 15,
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

const HeadText = styled.Text({
  fontSize: hp("1.7"),
  fontWeight: "600",
});

const OrderNo = styled.Text({
  fontSize: hp("1.7"),
  fontWeight: "300",
});

const OrderStatus = styled.Text({});

const MarketOrdersCard = ({ item }) => {
  const router = useRouter();

  const productPress = (item) => {
    router.push({
      pathname: "/market-product-details",
      params: { id: item?.urunId },
    });
  };

  const orderDetail = (item) => {
    router.push({
      pathname: "/market-order-detail",
      params: { id: item?.siparisId },
    });
  };

  return (
    <Container>
      <Header>
        <View>
          <HeadText>{item?.marketName} </HeadText>
          <OrderNo>Sipariş No : #{item?.siparisNo}</OrderNo>
          <OrderNo>
            {item?.siparisTarih} - {item?.siparisSaati}
          </OrderNo>
        </View>
        {item?.siparisDurumu === "Siparişiniz Alındı" && (
          <View center row>
            <View>
              <Ionicons
                color="green"
                size={wp("4.5")}
                name="thumbs-up-outline"
              />
            </View>
            <View>
              <OrderStatus
                style={{
                  color: "green",
                  fontSize: hp("1.7"),
                  fontWeight: "500",
                  marginLeft: 4,
                }}
              >
                {item?.siparisDurumu}
              </OrderStatus>
            </View>
          </View>
        )}
        {item?.siparisDurumu === "Hazırlanıyor" && (
          <View center row>
            <View>
              <Ionicons color="orange" size={wp("5")} name="cube-outline" />
            </View>
            <View>
              <OrderStatus
                style={{
                  color: "orange",
                  fontSize: hp("1.7"),
                  fontWeight: "500",
                  marginLeft: 4,
                }}
              >
                {item?.siparisDurumu}
              </OrderStatus>
            </View>
          </View>
        )}
        {item?.siparisDurumu === "Yola Çıktı" && (
          <View center row>
            <View>
              <Ionicons color="#ff7e21" size={wp("5.5")} name="car-outline" />
            </View>
            <View>
              <OrderStatus
                style={{
                  color: "#ff7e21",
                  fontSize: hp("1.8"),
                  fontWeight: "500",
                  marginLeft: 4,
                }}
              >
                {item?.siparisDurumu}
              </OrderStatus>
            </View>
          </View>
        )}
        {item?.siparisDurumu === "Teslim Edildi" && (
          <View center row>
            <View>
              <Ionicons
                color="green"
                size={wp("5")}
                name="checkmark-circle-outline"
              />
            </View>
            <View>
              <OrderStatus
                style={{
                  color: "green",
                  fontSize: hp("1.7"),
                  fontWeight: "500",
                  marginLeft: 4,
                }}
              >
                {item?.siparisDurumu}
              </OrderStatus>
            </View>
          </View>
        )}
        {item?.siparisDurumu === "İptal Edildi" && (
          <View center row>
            <View>
              <Ionicons
                color="red"
                size={wp("5")}
                name="close-circle-outline"
              />
            </View>
            <View>
              <OrderStatus
                style={{
                  fontSize: hp("1.7"),
                  fontWeight: "500",
                  marginLeft: 4,
                  color: "red",
                }}
              >
                {item?.siparisDurumu}
              </OrderStatus>
            </View>
          </View>
        )}
      </Header>
      <View center row>
        <ProductsScrollContainer
          horizontal
          showsHorizontalScrollIndicator={false}
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

export default MarketOrdersCard;

import React from "react";
import CategoryCards from "./components/category-cards/category-card";
import { View } from "react-native-ui-lib";

import { FlatList } from "react-native";
import AppHeader from "./components/headers/app-header";
import AdvertSliderCards from "./components/advert-slider/advert-slider-cards";

const data = [
  {
    name: "Marketim",
    backcolor: "#5F8D4E",
    titleColor: "#3c7028",
    href: "benim-market",
    icon: require("../assets/image/groceries.png"),
  },
  {
    name: "Yemeğim",
    backcolor: "orange",
    titleColor: "#bf7e06",
    href: "benim-yemek",
    icon: require("../assets/image/burger.png"),
  },
  {
    name: "Biletim",
    backcolor: "#B9E9FC",
    titleColor: "#3384a3",
    href: "benim-bilet",
    icon: require("../assets/image/voucher.png"),
  },
  {
    name: "Teknom",
    backcolor: "#de7259",
    titleColor: "#852c17",
    href: "benim-teknolojim",
    icon: require("../assets/image/tekno-img.png"),
  },
];

const campaignDatas = [
  {
    image:
      "https://capturly.com/blog/wp-content/uploads/2018/01/eCommerce-website-search-customer-experience.jpg",
  },
  {
    image:
      "https://images.deliveryhero.io/image/talabat/restaurants/coverpage_(1)_(1)_637913171782595310.jpg?width=750",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fGiRTZv__GE8Xaqhaq7R0J8kOYhA88kNCQ&usqp=CAU",
  },
];

const Home = () => {
  return (
    <View width={"100%"} height={"100%"}>
      <AppHeader />
      <AdvertSliderCards data={campaignDatas} />

      <FlatList
        data={data}
        bounces={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CategoryCards
            key={index}
            href={item.href}
            backcolor={item.backcolor}
            name={item.name}
            icon={item.icon}
            titlecolor={item.titleColor}
          />
        )}
      />
    </View>
  );
};

export default Home;

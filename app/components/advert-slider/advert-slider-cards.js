import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AnimatedImage, Carousel } from "react-native-ui-lib";

const AdvertSliderCards = ({ data }) => {
  return (
    <GestureHandlerRootView>
      <View
        style={{
          width: "100%",
          height: wp("45%"),
          marginVertical: 15,
          marginBottom: 5,
        }}
      >
        <Carousel
          animated
          autoplay
          loop
          pagingEnabled
          showCounter
          horizontal
          containerMarginHorizontal={15}
          allowAccessibleLayout
          pageControlPosition={Carousel.pageControlPositions.OVER}
        >
          {data?.map((item, index) => (
            <View key={index} style={styles.campaignContainer}>
              <AnimatedImage
                style={styles.campaignContainerImage}
                source={{
                  uri: item?.image,
                }}
              />
            </View>
          ))}
        </Carousel>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  campaignContainer: {
    width: "92%",
    height: "95%",
  },
  campaignContainerImage: { width: "100%", height: "100%", borderRadius: 20 },
});

export default AdvertSliderCards;

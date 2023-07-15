import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      className="flex-1 flex justify-around bg-white"
      style={{ marginTop: StatusBar.currentHeight }}
    >
      <View className="space-y-2">
        {/*title*/}
        <Text
          style={{ fontSize: wp(10) }}
          className="text-center font-bold text-gray-700"
        >
          Voxly
        </Text>
        {/*subtitle*/}
        <Text
          style={{ fontSize: wp(4) }}
          className="text-center tracking-wider text-gray-600 font-semibold"
        >
          The Future is here,powered by AI.
        </Text>
        {/* image */}
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/images/welcome.png")}
            style={{ height: wp(75), width: wp(75) }}
          />
        </View>
      </View>
      {/* get started button  */}
      <TouchableOpacity
        //@ts-ignore
        onPress={() => navigation.navigate("Home")}
        className="bg-emerald-600 mx-5 p-4 rounded-2xl"
      >
        <Text
          style={{ fontSize: wp(6) }}
          className="text-center font-bold text-white "
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

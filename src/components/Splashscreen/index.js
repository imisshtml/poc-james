import React, { useEffect } from "react";
import { Modal, View } from "react-native";
import LottieView from "lottie-react-native";
import * as SplashScreen from "expo-splash-screen";
import useData from "../../state/recoil";
import styles from "./styles";

const Splashscreen = () => {
  const { isAppInitialized, splashScreenPlayed, setSplashPlayed } = useData();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);
  }, []);

  const handleAnimationFinish = () => {
    setSplashPlayed();
  };

  const isModalVisible = !(isAppInitialized && splashScreenPlayed);

  return (
    <Modal visible={isModalVisible} animationType="fade">
      <View style={styles.container}>
        <LottieView
          source={require("../../assets/lottie/SunnovaPower_Rays.json")}
          loop={false}
          autoPlay
          onAnimationFinish={handleAnimationFinish}
        />
      </View>
    </Modal>
  );
};

export default Splashscreen;

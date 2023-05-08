import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const widthPercentage = (percentage: string | number): number => {
  const elemWidth =
    typeof percentage === "number" ? percentage : parseFloat(percentage);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
};

const heightPercentage = (percentage: string | number): number => {
  const elemHeight =
    typeof percentage === "number" ? percentage : parseFloat(percentage);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
};

const largeScreen = width > 427 && height > 925;

const baselineWidth = 375;
const scale = (size: number): number => {
  const scale = (width / baselineWidth) * size;
  return size + (scale - size) * 0.5;
};

export {
  widthPercentage as wp,
  heightPercentage as hp,
  scale as sc,
  width,
  height,
  largeScreen,
};

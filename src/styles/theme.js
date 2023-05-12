import { Appearance } from "react-native";

import colors from "./colors";

export const themes = {
  light: {
    colorScheme: "light",
    primaryBackground: colors.white,
    primaryBorder: colors.white,
    primaryText: colors.black,
    secondaryBorder: colors.gray,
    secondaryText: colors.black,
    primaryCTA: colors.success,
    secondaryCTA: colors.gray,
  },
  dark: {
    colorScheme: "dark",
    primaryBackground: colors.black,
    primaryBorder: colors.gray,
    primaryText: colors.white,
    secondaryBorder: colors.white,
    secondaryText: colors.white,
    primaryCTA: colors.success,
    secondaryCTA: colors.gray,
  },
};

const scheme = Appearance.getColorScheme() || "light";

export const theme = themes[scheme];

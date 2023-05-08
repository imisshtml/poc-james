import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";
import { sc, wp, hp } from "../../styles/metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme?.primaryBackground,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    height: sc(50),
    width: wp("30%"),
    borderWidth: 1,
    borderRadius: sc(10),
    marginBottom: sc(10),
    alignItems: "center",
    justifyContent: "center",
    borderColor: theme?.primaryBorder,
    backgroundColor: theme.primaryCTA,
  },
  buttonDisabled: {
    backgroundColor: theme?.secondaryCTA,
  },
  counter: {
    marginBottom: sc(20),
  },
});

export default styles;

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import * as SplashScreen from "expo-splash-screen";
import RootStack from "./src/navigation/RootStack";
import Splashscreen from "./src/components/Splashscreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Splashscreen />
        <RootStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </RecoilRoot>
  );
}

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import RootStack from "./src/navigation/RootStack";

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </RecoilRoot>
  );
}

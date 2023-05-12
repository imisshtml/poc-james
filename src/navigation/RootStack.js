import { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import useData from "../state/recoil";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const { getData } = useData();

  useEffect(() => {
    const getDataRequest = setInterval(() => {
      getData();
    }, 5000);

    return () => clearInterval(getDataRequest);
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Dashboard"
          component={Home}
          options={{
            header: () => null,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;

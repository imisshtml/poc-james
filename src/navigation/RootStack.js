import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const RootStack = () => {
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

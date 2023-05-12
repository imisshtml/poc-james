import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import useData from "../../state/recoil";
import styles from "./styles";

const Home = ({ navigation }) => {
  const { list, count, loading, addOne, getData } = useData();

  return (
    <SafeAreaView style={styles.container}>
      {/*<TouchableOpacity onPress={getData}>
        <View style={[styles.button, loading && styles.buttonDisabled]}>
          {loading ? <ActivityIndicator size="small" /> : <Text>Get Data</Text>}
        </View>
      </TouchableOpacity>*/}
      <TouchableOpacity onPress={addOne}>
        <View style={styles.button}>
          <Text>Counter +1</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.counter}>
        <Text>Count is: {count}</Text>
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={{ flexDirection: "row" }}>
            <Text>New Data Loading </Text>
            <ActivityIndicator size="small" />
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;

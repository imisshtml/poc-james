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
      <TouchableOpacity onPress={getData}>
        <View style={[styles.button, loading && styles.buttonDisabled]}>
          {loading ? <ActivityIndicator size="small" /> : <Text>Get Data</Text>}
        </View>
      </TouchableOpacity>
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
        renderItem={(item) => {
          return (
            <View>
              <Text>{item.item}</Text>
            </View>
          );
        }}
        ListEmptyComponent={
          <View>
            <Text>Best Kitten Names</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Home;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <View style={styles.body}>
        <Text>Chat</Text>
      </View>
      </View>
      <View>
      <View style={{backgroundColor: "yellow", height: 100, width: 200}}>
      <Image style={styles.image} source={require('./assets/xe hàng.png')} />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "blue",
    flex: 1,
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "red"
  },
  header: {
        height: 500,
    width: 100,
  },
  image: {
    height: 20,
  width:30,  },
});

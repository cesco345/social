import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Navigator from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Post component */}
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Amplify } from "aws-amplify";

import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "./src/aws-exports";

//Amplify.configure(config);
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

import Navigator from "./src/navigation";

function App() {
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

export default withAuthenticator(App);

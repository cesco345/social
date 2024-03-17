import FeedScreen from "../screens/FeedScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "../screens/CreatePostScreen";

const { NavigationContainer } = require("@react-navigation/native");
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Create Post" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

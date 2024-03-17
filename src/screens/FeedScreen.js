import { FlatList, Pressable, Image, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import posts from "../../assets/data/posts.json";
import FeedPost from "../components/FeedPost";

const img =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";

const FeedScreen = () => {
  const navigation = useNavigation();
  const createPost = () => {
    navigation.navigate("Create Post");
  };

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />}
      ListHeaderComponent={() => (
        <Pressable onPress={createPost} style={styles.header}>
          <Image source={{ uri: img }} style={styles.profileImage} />
          <Text style={styles.name}>What's on your mind?</Text>
          <Entypo
            name="images"
            size={24}
            color="limegreen"
            style={styles.icon}
          />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "lightgray",
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  icon: {
    marginLeft: "auto",
  },
});

export default FeedScreen;

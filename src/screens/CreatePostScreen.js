import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { DataStore } from "@aws-amplify/datastore";
import { Post } from "../models";
import { Auth } from "aws-amplify";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const onSubmit = async () => {
    console.warn("Posting: ", description);

    const userData = await Auth.currentAuthenticatedUser();
    const newPost = new Post({
      description,
      // "imag": "Lorem ipsum dolor sit amet",
      numberOfLikes: 0,
      numberOfShares: 0,
      postUserId: userData.attributes.sub,
      _version: 1,
    });
    await DataStore.save(newPost);

    setDescription("");
    navigation.goBack();
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Create Post Screen</Text>

      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>

      <TextInput
        placeholder="What's on your mind?"
        // set the value of the TextInput to the value from state
        value={description}
        // When user types, TextInput will call the onChangeText callback with the new value
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.buttonContainer}>
        <Button onPress={onSubmit} title="Post" disabled={!description} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    width: "100%",
    marginTop: 25,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  image: {
    width: "50%",
    aspectRatio: 4 / 3,
  },

  name: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  input: {
    fontSize: 18,
    height: 100,
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    marginLeft: "auto",
  },
});

export default CreatePostScreen;

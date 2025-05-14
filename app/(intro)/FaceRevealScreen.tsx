import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ProgressBar from "../components/Shared/ProgressBar";

export default function FaceRevealScreen() {
      const router = useRouter()
  
  //   const [images, setImages] = useState([null, null, null, null]);
  const [images, setImages] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
  ]);

  //   const pickImage = async (index) => {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       quality: 1,
  //     });

  //     if (!result.canceled) {
  //       const updated = [...images];
  //       updated[index] = result.assets[0].uri;
  //       setImages(updated);
  //     }
  //   };

  const pickImage = async (index: number) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const updated = [...images];
      updated[index] = result.assets[0].uri;
      setImages(updated);
    }
  };

  const guidelines = [
    "4 photos that best express your personality",
    "Use bright photos that show your smile",
    "Avoid blurry photos",
    "Avoid filters, show others the real you",
  ];

  return (
    <View style={styles.container}>
        <ProgressBar />
      <Text style={styles.title}>Time for a face reveal!</Text>

      <View style={styles.grid}>
        {images.map((img, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageBox}
            onPress={() => pickImage(index)}
          >
            {img ? (
              <Image source={{ uri: img }} style={styles.image} />
            ) : (
              <MaterialIcons name="add" size={32} color="#aaa" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.guidelines}>
        {guidelines.map((tip, i) => (
          <Text key={i} style={styles.bullet}>
            • {tip}
          </Text>
        ))}
      </View>

      <TouchableOpacity style={styles.fab}
      onPress={()=>router.push('/(tabs)/Discover')}>
        <MaterialIcons name="arrow-forward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 90,

    position: "relative",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageBox: {
    width: "47%",
    aspectRatio: 1,
    backgroundColor: "#eee",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  guidelines: {
    marginTop: 10,
  },
  bullet: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    backgroundColor: "#8e276d",
    padding: 18,
    borderRadius: 30,
    elevation: 5,
  },
});

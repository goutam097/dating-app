import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "../components/Shared/ProgressBar";

export default function QuickIntroScreen() {
      const router = useRouter()
    
  const [gender, setGender] = useState<string | undefined>();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Progress bar */}
          <ProgressBar />
          {/* <View style={styles.progressBar}>
            <View style={styles.progressIndicator} />
          </View> */}
    
          <Text style={styles.title}>Let's start with a{"\n"}quick intro</Text>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#888"
          />

          <TextInput
            style={styles.input}
            placeholder="DD  /  MM  /  YYYY"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#888"
          />

          <View style={styles.genderRow}>
            {["Male", "Female"].map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.genderBtn,
                  gender === item && styles.genderBtnSelected,
                ]}
                onPress={() => setGender(item)}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === item && styles.genderTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.infoBox}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#555"
            />
            <Text style={styles.infoText}>
              You can choose to hide your first name after verifying yourself.
            </Text>
          </View>

          <TouchableOpacity style={styles.nextBtn} 
          onPress={()=>router.push('/(intro)/AgeConfirmationModal')}>
            <Ionicons name="arrow-forward" size={28} color="#fff" />
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#fff",
    flexGrow: 1,
    justifyContent: "flex-start",
    height:'100%'
  },
//   progressBar: {
//     height: 4,
//     backgroundColor: "#eee",
//     width: "100%",
//     borderRadius: 2,
//     marginBottom: 16,
//   },
//   progressIndicator: {
//     width: "10%",
//     backgroundColor: "#000",
//     height: "100%",
//     borderRadius: 2,
//   },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    marginBottom: 24,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    paddingVertical: 12,
    marginBottom: 24,
    color: "#000",
  },
  genderRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  genderBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  genderBtnSelected: {
    backgroundColor: "#8d2561",
    borderColor: "#8d2561",
  },
  genderText: {
    color: "#000",
    fontWeight: "500",
  },
  genderTextSelected: {
    color: "#fff",
  },
  infoBox: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
    marginTop: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: "#333",
  },
  nextBtn: {
    backgroundColor: "#8d2561",
    borderRadius: 30,
    padding: 16,
    position: "absolute",
    bottom: 24,
    right: 24,
    elevation: 5,
  },
});

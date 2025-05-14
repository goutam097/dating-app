import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AgeConfirmationModal() {
          const router = useRouter()
    
  const [visible, setVisible] = useState(true);
  const age = 27; // dynamically calculate this in real usage

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <Text style={styles.title}>Are you {age} years old?</Text>
            <Text style={styles.subtitle}>
              Make sure the age you entered is correct. This cannot be changed
              later.
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, styles.yesButton]}
                // onPress={() => setVisible(false)}
                onPress={() => router.push('/(intro)/HeightSelector')}
              >
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.noButton]}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.1)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  modalBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#444",
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "flex-start",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  yesButton: {
    backgroundColor: "#8d2561",
  },
  noButton: {
    backgroundColor: "#eee",
  },
  yesText: {
    color: "#fff",
    fontWeight: "600",
  },
  noText: {
    color: "#666",
    fontWeight: "500",
  },
});

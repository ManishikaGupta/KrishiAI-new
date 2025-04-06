import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ChatbotModal from "../app/(tabs)/chatbot"; // Adjust the path based on your folder structure

const FloatingChatbotButton = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.button}
      >
        <Text style={styles.text}>💬</Text>
      </TouchableOpacity>

      <ChatbotModal visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 5,
    right: 20,
    backgroundColor: "#6A994E",
    padding: 12,
    borderRadius: 30,
    zIndex: 1000,
    elevation: 5,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default FloatingChatbotButton;

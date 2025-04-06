import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const ChatbotModal: React.FC<Props> = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Chat with KrishiBot 🤖</Text>
          <Text style={styles.text}>How can I assist you today?</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F772D",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#6A994E",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  closeText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ChatbotModal;

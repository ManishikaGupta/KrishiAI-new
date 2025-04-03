import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Community = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! Welcome to the community chat. 🌱" },
  ]);
  const [inputText, setInputText] = useState("");

  // Function to send a message
  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        { id: Date.now().toString(), text: inputText },
      ]);
      setInputText("");
    }
  };

  // Simulated Call Feature
  const makeCall = () => {
    Alert.alert("Calling...", "Connecting to a farmer 🧑‍🌾📞");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🌾 Community Chat</Text>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      {/* Chat Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Call & Connect Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={makeCall}>
          <Ionicons name="call" size={24} color="white" />
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            Alert.alert("Connection Request Sent", "You are now connected! ✅")
          }
        >
          <Ionicons name="person-add" size={24} color="white" />
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  messageBubble: {
    backgroundColor: "#d1e7dd",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    elevation: 3,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Community;

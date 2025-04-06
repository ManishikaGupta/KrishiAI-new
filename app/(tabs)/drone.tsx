import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FloatingChatbotButton from "@/components/floating-chat";

type RootStackParamList = {
  Home: undefined;
  DroneBooking: undefined;
};

type DroneBookingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "DroneBooking">;
};

const DroneBookingScreen: React.FC<DroneBookingScreenProps> = ({ navigation }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [level, setLevel] = useState("low");
  const [previousPesticide, setPreviousPesticide] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.pageTitle}>Book Drone Appointment</Text>
      </View>

      <Text style={styles.label}>Date (DD-MM-YYYY):</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="e.g., 21-04-2025"
        keyboardType="default"
      />

      <Text style={styles.label}>Time (HH:MM):</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="e.g., 14:30"
        keyboardType="default"
      />

      <Text style={styles.label}>Venue:</Text>
      <TextInput
        style={styles.input}
        value={venue}
        onChangeText={setVenue}
        placeholder="Enter location"
      />

      <Text style={styles.label}>Pesticide Level:</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={level} onValueChange={setLevel}>
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
        </Picker>
      </View>

      <Text style={styles.label}>Previous Pesticide Used:</Text>
      <TextInput
        style={styles.input}
        value={previousPesticide}
        onChangeText={setPreviousPesticide}
        placeholder="Enter name or details"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5DC",
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    color: "#4F772D",
  },
  homeLink: {
    fontSize: 16,
    color: "#1D3557",
    marginTop: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    marginTop: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6A994E",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DroneBookingScreen;

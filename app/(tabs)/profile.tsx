import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  // State for Profile Info
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Rajesh Kumar");
  const [location, setLocation] = useState("Punjab, India");
  const [experience, setExperience] = useState("10+ years in Organic Farming");
  const [crops, setCrops] = useState("Wheat, Rice, Sugarcane, Maize");
  const [languages, setLanguages] = useState("Hindi, Punjabi, English");
  const [phoneNo, setPhoneNo] = useState("+91 98765 43210");

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/1600x900/?farm,agriculture" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Editable Information */}
          <ProfileInfo
            label="Name"
            value={name}
            setValue={setName}
            isEditing={isEditing}
            autoCapitalize="words"
          />
          <ProfileInfo
            label="Location"
            value={location}
            setValue={setLocation}
            isEditing={isEditing}
            autoCapitalize="words"
          />
          <ProfileInfo
            label="Experience"
            value={experience}
            setValue={setExperience}
            isEditing={isEditing}
            autoCapitalize="sentences"
          />
          <ProfileInfo
            label="Crops Grown"
            value={crops}
            setValue={setCrops}
            isEditing={isEditing}
            autoCapitalize="sentences"
          />
          <ProfileInfo
            label="Languages Known"
            value={languages}
            setValue={setLanguages}
            isEditing={isEditing}
            autoCapitalize="words"
          />
          <ProfileInfo
            label="Contact"
            value={phoneNo}
            setValue={setPhoneNo}
            isEditing={isEditing}
            keyboardType="phone-pad"
          />

          {/* Edit / Save Button */}
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setIsEditing(!isEditing)}
          >
            <Ionicons
              name={isEditing ? "save" : "pencil"}
              size={18}
              color="white"
            />
            <Text style={styles.buttonText}>
              {isEditing ? "Save Profile" : "Edit Profile"}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

// ✅ Reusable Profile Info Input Component
interface ProfileInfoProps {
  label: string;
  value: string;
  setValue: (text: string) => void;
  isEditing: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  label,
  value,
  setValue,
  isEditing,
  autoCapitalize = "none",
  keyboardType = "default",
}) => (
  <View style={styles.infoContainer}>
    <Text style={styles.infoTitle}>{label}</Text>
    {isEditing ? (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={`Enter ${label}`}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
    ) : (
      <Text style={styles.infoText}>{value}</Text>
    )}
  </View>
);

// ✅ Styling with soothing green tones 🌿
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(50, 100, 50, 0.8)", // 🌿 Soft dark green overlay
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 50, // Ensures space to scroll to Save button
  },
  infoContainer: {
    width: "90%",
    backgroundColor: "#A7C47D", // 🍃 Light Green Card
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2F4F2F",
  },
  infoText: {
    fontSize: 16,
    color: "#2F4F2F",
  },
  editButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#52734D", // 🌱 Dark Green Button
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 8,
    fontSize: 16,
    width: "100%",
    marginTop: 5,
  },
});

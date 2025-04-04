import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // ✅ Correct import

const BottomNavigation: React.FC = () => {
  const router = useRouter(); // ✅ Hook inside the component
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "green",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#3b7d27",
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#3b7d27",
        }}
      >
        <TouchableOpacity
          style={{ alignItems: "center", width: screenWidth / 5 }}
          onPress={() => router.push("/crops")}
        >
          <Ionicons name="leaf" size={24} color="#d5fdc9" />
          <Text>Crops</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center", width: screenWidth / 5 }}
          onPress={() => router.push("/community")}
        >
          <Ionicons name="people" size={24} color="#d5fdc9" />
          <Text>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center", width: screenWidth / 5 }}
          onPress={() => router.push("/home")}
        >
          <Ionicons name="home" size={24} color="#d5fdc9" />
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center", width: screenWidth / 5 }}
          onPress={() => router.push("/dukaan")}
        >
          <Ionicons name="storefront" size={24} color="#d5fdc9" />
          <Text>Dukaan</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center", width: screenWidth / 5 }}
          onPress={() => router.push("/profile")} // ✅ Fix navigation
        >
          <Ionicons name="person" size={24} color="#d5fdc9" />
          <Text>You</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BottomNavigation;

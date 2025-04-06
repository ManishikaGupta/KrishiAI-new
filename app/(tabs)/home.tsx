// // import React from "react";
// // import { View, Text, StyleSheet } from "react-native";

// // const home = () => {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>Welcome to the Home Page!</Text>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   text: {
// //     fontSize: 20,
// //     fontWeight: "bold",
// //   },
// // });

// // export default home;


// import React from "react";
// import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// const HomePage = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Krishi.ai</Text>
//       </View>
      
//       {/* Hero Section */}
//       <View style={styles.heroSection}>
//         <Text style={styles.heroTitle}>Your Smart Solution to Agricultural Problems</Text>
//         <Text style={styles.heroSubtitle}>Empowering farmers with AI-driven insights, market access, and financial inclusion.</Text>
//         <Image source={require("../../assets/rice.jpg")} style={styles.heroImage} />
//       </View>

//       {/* Features */}
//       <View style={styles.featuresSection}>
//         <Text style={styles.sectionTitle}>Why Choose Krishi.ai?</Text>
//         <View style={styles.featureItem}>
//           <Ionicons name="cloud-outline" size={30} color="#4F772D" />
//           <Text style={styles.featureText}>Real-time Weather & Crop Advisory</Text>
//         </View>
//         <View style={styles.featureItem}>
//           <Ionicons name="cash-outline" size={30} color="#4F772D" />
//           <Text style={styles.featureText}>Instant Loan & Subsidy Access</Text>
//         </View>
//         <View style={styles.featureItem}>
//           <Ionicons name="cart-outline" size={30} color="#4F772D" />
//           <Text style={styles.featureText}>Buy & Sell Directly with No Middlemen</Text>
//         </View>
//       </View>
      
//       {/* CTA Button */}
//       <TouchableOpacity style={styles.ctaButton}>
//         <Text style={styles.ctaButtonText}>Explore Services</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#F5F5DC" },
//   header: { padding: 20, backgroundColor: "#6A994E", alignItems: "center" },
//   headerText: { fontSize: 24, fontWeight: "bold", color: "#FFF" },
//   heroSection: { padding: 20, alignItems: "center" },
//   heroTitle: { fontSize: 20, fontWeight: "bold", color: "#1D3557", textAlign: "center" },
//   heroSubtitle: { fontSize: 14, color: "#4F772D", textAlign: "center", marginVertical: 10 },
//   heroImage: { width: "100%", height: 200, borderRadius: 10 },
//   featuresSection: { padding: 20 },
//   sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#1D3557", marginBottom: 10 },
//   featureItem: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
//   featureText: { fontSize: 16, marginLeft: 10, color: "#4F772D" },
//   ctaButton: { backgroundColor: "#6A994E", padding: 15, margin: 20, borderRadius: 10, alignItems: "center" },
//   ctaButtonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
// });

// export default HomePage;

// app/(tabs)/home.tsx

import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import FloatingChatbotButton from "../../components/floating-chat";

const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
        <FloatingChatbotButton />
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Krishi.ai</Text>
      <Text style={styles.subtitle}>
        Your smart solution to agricultural problems in rural India.
      </Text>

      <Image
        source={require("../../assets/farmer.jpg")}
        style={styles.heroImage}
        resizeMode="cover"
      />

      <Text style={styles.sectionTitle}>Drone Services</Text>
      <View style={styles.card}>
        <Image source={require("../../assets/drone.jpg")} style={styles.cardImage} />
        <Text style={styles.cardText}>
          Leverage AI-powered drones for precision pesticide spraying and crop monitoring.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/drone")}
        >
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5DC",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4F772D",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  heroImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D3557",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#6A994E",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

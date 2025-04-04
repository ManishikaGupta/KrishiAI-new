// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const crops = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Crops Page</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });

// export default crops;


import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const cropsData = [
  {
    name: "Wheat",
    image: require("../../assets/wheat.jpg"),
    climate: "Cool and dry",
    soil: "Well-drained loamy soil",
    irrigation: "Moderate water requirement",
    investment: "₹15,000/acre",
    sellingPrice: "₹40/kg",
  },
  {
    name: "Rice",
    image: require("../../assets/rice.jpg"),
    climate: "Hot and humid",
    soil: "Clayey soil with good water retention",
    irrigation: "High water requirement",
    investment: "₹25,000/acre",
    sellingPrice: "₹50/kg",
  },
  {
    name: "Lentils",
    image: require("../../assets/lentils.jpg"),
    climate: "Cool to moderate",
    soil: "Sandy loam soil",
    irrigation: "Minimal water requirement",
    investment: "₹18,000/acre",
    sellingPrice: "₹80/kg",
  },
  {
    name: "Chickpeas",
    image: require("../../assets/chickpea.jpg"),
    climate: "Warm and dry",
    soil: "Sandy loam with good drainage",
    irrigation: "Low to moderate",
    investment: "₹20,000/acre",
    sellingPrice: "₹90/kg",
  },
  {
    name: "Tomato",
    image: require("../../assets/tomato.jpg"),
    climate: "Warm with mild humidity",
    soil: "Well-drained loamy soil",
    irrigation: "Frequent watering required",
    investment: "₹30,000/acre",
    sellingPrice: "₹30/kg",
  },
  {
    name: "Potato",
    image: require("../../assets/potato.jpg"),
    climate: "Cool to moderate",
    soil: "Sandy loam or alluvial soil",
    irrigation: "Moderate water requirement",
    investment: "₹22,000/acre",
    sellingPrice: "₹25/kg",
  },
  {
    name: "Milk",
    image: require("../../assets/milk.jpg"),
    climate: "Suitable for all regions",
    soil: "N/A",
    irrigation: "N/A",
    investment: "Varies per cow",
    sellingPrice: "₹50/L",
  },
  {
    name: "Curd",
    image: require("../../assets/curd.jpg"),
    climate: "N/A",
    soil: "N/A",
    irrigation: "N/A",
    investment: "Varies based on milk production",
    sellingPrice: "₹60/kg",
  },
];

const CropsPage = () => {
  return (
    <ScrollView style={styles.container}>
      {cropsData.map((crop, index) => (
        <View key={index} style={styles.cropCard}>
          <Image source={crop.image} style={styles.cropImage} />
          <View style={styles.cropInfo}>
            <Text style={styles.cropName}>{crop.name}</Text>
            <Text style={styles.cropDetail}>🌿 Climate: {crop.climate}</Text>
            <Text style={styles.cropDetail}>🌱 Soil: {crop.soil}</Text>
            <Text style={styles.cropDetail}>💧 Irrigation: {crop.irrigation}</Text>
            <Text style={styles.cropDetail}>💰 Investment: {crop.investment}</Text>
            <Text style={styles.cropDetail}>🏷️ Selling Price: {crop.sellingPrice}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5DC", padding: 10 },
  cropCard: {
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cropImage: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  cropInfo: { flex: 1 },
  cropName: { fontSize: 18, fontWeight: "bold", color: "#1D3557" },
  cropDetail: { fontSize: 14, color: "#4F772D", marginTop: 3 },
});

export default CropsPage;
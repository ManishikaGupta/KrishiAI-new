// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const dukaan = () => {
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

// export default dukaan;

import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationIndependentTree } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const cropData: Record<string, { id: string; name: string; price: string; image: any }[]> = {
  Grains: [
    { id: "1", name: "Wheat", price: "₹40/kg", image: require("../../assets/wheat.jpg") },
    { id: "2", name: "Rice", price: "₹50/kg", image: require("../../assets/rice.jpg") },
  ],
  Pulses: [
    { id: "3", name: "Lentils", price: "₹80/kg", image: require("../../assets/lentils.jpg") },
    { id: "4", name: "Chickpeas", price: "₹90/kg", image: require("../../assets/chickpea.jpg") },
  ],
  Vegetables: [
    { id: "5", name: "Tomato", price: "₹30/kg", image: require("../../assets/tomato.jpg") },
    { id: "6", name: "Potato", price: "₹25/kg", image: require("../../assets/potato.jpg") },
  ],
  Dairy: [
    { id: "7", name: "Milk", price: "₹50/L", image: require("../../assets/milk.jpg") },
    { id: "8", name: "Curd", price: "₹60/kg", image: require("../../assets/curd.jpg") },
  ],
};

interface CropListProps {
  category: string;
}

const CropList: React.FC<CropListProps> = ({ category }) => {
  const [cart, setCart] = useState<Record<string, number>>({});

  const addToCart = (id: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart;
      const updatedCart = { ...prevCart };
      updatedCart[id] -= 1;
      if (updatedCart[id] <= 0) delete updatedCart[id];
      return updatedCart;
    });
  };

  return (
    <FlatList
      data={cropData[category]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cropCard}>
          <Image source={item.image} style={styles.cropImage} />
          <View style={styles.infoContainer}>
            <Text style={styles.cropName}>{item.name}</Text>
            <Text style={styles.cropPrice}>{item.price}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item.id)}>
              <Text style={styles.addButtonText}>+ {cart[item.id] || 0}</Text>
            </TouchableOpacity>
            {cart[item.id] > 0 && (
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
                <Text style={styles.removeButtonText}>-</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    />
  );
};

export default function DukaanScreen() {
  return (
    <NavigationIndependentTree>
      <Tab.Navigator>
        <Tab.Screen name="Grains">{() => <CropList category="Grains" />}</Tab.Screen>
        <Tab.Screen name="Pulses">{() => <CropList category="Pulses" />}</Tab.Screen>
        <Tab.Screen name="Vegetables">{() => <CropList category="Vegetables" />}</Tab.Screen>
        <Tab.Screen name="Dairy">{() => <CropList category="Dairy" />}</Tab.Screen>
      </Tab.Navigator>
    </NavigationIndependentTree>
  );
}

const styles = StyleSheet.create({
  cropCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cropImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  cropName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1D3557",
  },
  cropPrice: {
    fontSize: 14,
    color: "#4F772D",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#6A994E",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  addButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#D9534F",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
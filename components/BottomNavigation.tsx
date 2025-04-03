import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const BottomNavigation = () => {
  const router = useRouter();
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navContainer}>
        <NavItem
          name="home"
          label="Home"
          icon="home-outline"
          router={router}
          width={screenWidth / 5}
        />
        <NavItem
          name="crops"
          label="Crops"
          icon="leaf-outline"
          router={router}
          width={screenWidth / 5}
        />
        <NavItem
          name="community"
          label="Community"
          icon="people-outline"
          router={router}
          width={screenWidth / 5}
        />
        <NavItem
          name="dukaan"
          label="Dukaan"
          icon="storefront-outline"
          router={router}
          width={screenWidth / 5}
        />
        <NavItem
          name="profile"
          label="You"
          icon="person-outline"
          router={router}
          width={screenWidth / 5}
        />
      </View>
    </SafeAreaView>
  );
};

// ✅ Define strict route names
type RouteName = "home" | "crops" | "community" | "dukaan" | "profile";

// ✅ Define Props for TypeScript
interface NavItemProps {
  name: RouteName;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  router: ReturnType<typeof useRouter>;
  width: number;
}

const NavItem: React.FC<NavItemProps> = ({
  name,
  label,
  icon,
  router,
  width,
}) => (
  <TouchableOpacity
    style={[styles.navItem, { width }]}
    onPress={() => router.push(`/${name}` as const)}
  >
    <Ionicons name={icon} size={28} color="#2E7D32" />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f8f8f8",
    paddingVertical: 12,
  },
  navItem: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
});

export default BottomNavigation;

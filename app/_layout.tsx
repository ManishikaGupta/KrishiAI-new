import { Stack } from "expo-router";
import BottomNavigation from "../components/BottomNavigation"; // ✅ Corrected path

const Layout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <BottomNavigation />
    </>
  );
};

export default Layout;

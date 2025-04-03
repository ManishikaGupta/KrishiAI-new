import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="crops" />
      <Tabs.Screen name="community" />
      <Tabs.Screen name="dukaan" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

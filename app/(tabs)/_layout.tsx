import React, { ReactNode } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, StyleSheet } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import {
  HomeIcon,
  PigIcon,
  QRIcon,
  StarIcon,
  TransfersIcon,
} from "@/components/TabIcons";

const TabBarIconContainer = ({
  children,
  focused,
}: {
  focused: boolean;
  children: ReactNode;
}) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.tabBarIconContainer}>
      {children}
      <View
        style={[
          styles.activeIndicator,
          {
            backgroundColor: Colors[colorScheme ?? "light"].tabIconSelected,
            opacity: focused ? 1 : 0,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarIconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  activeIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
  },
});

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tabIconSelected,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false, //useClientOnlyValue(false, true),
        tabBarStyle: {
          height: 89,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          position: "absolute",
          bottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconContainer focused={focused}>
              <HomeIcon color={color} />
            </TabBarIconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconContainer focused={focused}>
              <PigIcon color={color} />
            </TabBarIconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name="qr-scanner"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconContainer focused={focused}>
              <QRIcon color={color} />
            </TabBarIconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name="transfers"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconContainer focused={focused}>
              <TransfersIcon color={color} />
            </TabBarIconContainer>
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIconContainer focused={focused}>
              <StarIcon color={color} />
            </TabBarIconContainer>
          ),
        }}
      />
    </Tabs>
  );
}

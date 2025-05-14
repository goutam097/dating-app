import Colors from "@/data/Colors";
import { AntDesign, Entypo, Feather, Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.RASPBERRY_SIPS,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Discover"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="flame" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Matches"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart-outlined" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}


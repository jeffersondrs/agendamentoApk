import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import BarberProfile from "../pages/BarberProfile";
import UserProfile from "../pages/UserProfile";
import EditProfile from "../pages/EditProfile";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const Stack = createBottomTabNavigator();

export function AppRoutes() {
  const screenOptions = {
    headerShown: false,
    tabBarActiveTintColor: "#fff",
    tabBarInactiveTintColor: "#92929c",
    tabBarStyle: {
      backgroundColor: "#1c1c1c",
      borderTopColor: "#1c1c1c",
    },
    tabBarHideOnKeyboard: true,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="User"
        component={UserProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-edit"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Barbers"
        component={BarberProfile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="users" size={size} color={color} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

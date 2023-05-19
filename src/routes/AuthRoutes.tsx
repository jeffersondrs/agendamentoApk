import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../pages/Welcome";
import Login from "../pages/Signin";
import Register from "../pages/Signup";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  const screenOptions = {
    headerShown: false,
    contentStyle: {
      backgroundColor: "#23ed",
    },
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Signin" component={Login} />
      <Stack.Screen name="Signup" component={Register} />
    </Stack.Navigator>
  );
}

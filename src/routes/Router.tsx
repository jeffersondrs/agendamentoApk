import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AppRoutes } from "./AppRoutes";
import { AuthRoutes } from "./AuthRoutes";
import { AuthContext } from "../contexts/Auth";

export default function Routes() {
  const { isAuthenticated } = useContext(AuthContext);
  
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

import { createContext, useState } from "react";
import { login } from "../services/authService";
import { AuthProviderProps, AuthContextData } from "../types/global";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  setAuthenticated: () => {},
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  loading: false,
  error: "",
});

const JWT =
  "khjfsdahpe5klh23415hionasfd89yj8y903241hu1234hho4123134lkjjl143jlç4132çljk2";

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleSignin = async (email: string, password: string) => {
    try {
      await login(email, password);
      setIsAuthenticated(true);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("token", JWT);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = async () => {
    try {
      setIsAuthenticated(false);
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated: setIsAuthenticated,
        login: handleSignin,
        logout: handleLogout,
        loading: false,
        error: "",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

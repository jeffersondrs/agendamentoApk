import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

async function login(email: string, password: string) {
  try {
    await AsyncStorage.setItem("@RNAuth:user", email);

    Alert.alert("Sucesso", "Login realizado com sucesso!");
  } catch (error) {
    Alert.alert("Erro", "Não foi possível fazer login.");
  }
}

export { login };

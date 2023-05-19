import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/Auth";
import { useForm, Controller } from "react-hook-form";

export default function Signin() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setAuthenticated, login } = useContext(AuthContext);

  const handleSignin = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha todos os campos");
      return;
    }
    try {
      await login(email, password);
      setAuthenticated(true); // Altera o estado isAuthenticated para true
    } catch (error) {
      console.error(error);
      // Lógica para lidar com erro de autenticação, se necessário
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="bounceInRight"
        style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
      >
        Signin
      </Animatable.Text>

      <TextInput
        style={styles.inputContainer}
        placeholder="Email"
        autoComplete="email"
        onChange={(e) => setEmail(e.nativeEvent.text)}
      />

      <TextInput
        style={styles.inputContainer}
        placeholder="Senha"
        autoComplete="off"
        secureTextEntry={true}
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      {error && <Text style={{ color: "red" }}>{error}</Text>}
      <TouchableOpacity style={styles.butonStyle} onPress={handleSignin}>
        <Text style={styles.TextButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#23ed",
    flex: 1,
    color: "white",
  },
  butonStyle: {
    backgroundColor: "#3e3",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 100,
    height: 40,
    padding: 10,
  },
  TextButton: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 200,
    height: 40,
    padding: 10,
  },
});

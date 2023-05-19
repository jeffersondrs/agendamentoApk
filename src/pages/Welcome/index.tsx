import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/SVG.png")}
          resizeMode="center"
          style={{
            width: 250,
            height: 250,
          }}
        />
      </View>
      <Animatable.Text
        animation="pulse"
        style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
      >
        Bem-vindo
      </Animatable.Text>
      <View style={styles.containerBotton}>
        <View style={{ width: "80%", marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
            Escolha uma das opções abaixo para continuar
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.butonStyle}
            onPress={() => navigation.navigate("Signin")}
          >
            <Text style={styles.textEnter}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.butonEnterStyle}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.textEnter}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingVertical: 30,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBotton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  butonStyle: {
    padding: 10,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1,
    width: 100,
  },
  butonEnterStyle: {
    padding: 10,
    borderRadius: 30,
    borderColor: "#4cdcdc",
    borderWidth: 1,
    width: 100,
  },
  textEnter: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.headerHome}>
        <Text style={styles.textStyle}>
          Bem vindo ao aplicativo de agendamentos.
        </Text>
      </View>
      <View style={styles.imageStyles}>
        <Image
          source={require("../../assets/SVG.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#23ed",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    padding: 10,
    textShadowColor: "black",
    textShadowRadius: 5,
  },
  headerHome: {
    backgroundColor: "#23ed",
    borderRadius: 20,
    height: 250,
    width: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  butonStyle: {
    backgroundColor: "#4c22dc",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
  },
  imageStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

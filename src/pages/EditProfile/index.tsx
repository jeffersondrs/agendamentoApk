import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EditProfile() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Editar perfil do usuário</Text>
      <TouchableOpacity
        style={styles.butonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.butonStyle}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={{ color: "black", fontSize: 20 }}>Editar perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  butonStyle: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 20,
  },
});

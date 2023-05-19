import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UserProfile() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Perfil do usuário</Text>
      <TouchableOpacity
        style={styles.butonStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Profile barbeiro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.butonStyle}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Profile barbeiro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4c00ff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
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
});

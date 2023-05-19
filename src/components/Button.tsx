import { View, Text, StyleSheet } from "react-native";

export default function Button() {
  return (
    <View  style={styles.container}>
      <Text style={styles.textStyle}>Ola novamente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        padding: 10, 
        borderRadius: 30,
        color: "white",
        fontWeight: "bold",
        borderColor: "white",
        borderWidth: 1,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    }
})
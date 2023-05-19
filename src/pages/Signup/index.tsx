import React, { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { Address } from "../../types/global";

export default function Signup() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState<Address["email"]>("");
  const [password, setPassword] = useState<Address["password"]>("");
  const [name, setName] = useState<Address["name"]>("");
  const [passwordConfirm, setPasswordConfirm] =
    useState<Address["passwordConfirm"]>("");
  const [cpf, setCpf] = useState<Address["cpf"]>(0);
  const [phone, setPhone] = useState<Address["phone"]>(0);
  const [street, setStreet] = useState<Address["street"]>("");
  const [number, setNumber] = useState<Address["number"]>(0);
  const [complement, setComplement] = useState<Address["complement"]>("");
  const [neighborhood, setNeighborhood] = useState<Address["neighborhood"]>("");
  const [city, setCity] = useState<Address["city"]>("");
  const [state, setState] = useState<Address["state"]>("");
  const [country, setCountry] = useState<Address["country"]>("");
  const [cep, setCep] = useState<Address["cep"]>(0);

  const [error, setError] = useState<Address>({
    email: "",
    password: "",
    name: "",
    passwordConfirm: "",
    cpf: 0,
    phone: 0,
    street: "",
    number: 0,
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    country: "",
    cep: 0,
  });

  const handleSignin = () => {
    if (email === "") {
      setError({ ...error, email: "Email é obrigatório" });
      return;
    }
    if (password === "") {
      setError({ ...error, password: "Senha é obrigatório" });
      return;
    }
    if (name === "") {
      setError({ ...error, name: "Nome é obrigatório" });
      return;
    }
    if (passwordConfirm === "") {
      setError({
        ...error,
        passwordConfirm: "Confirmação de senha é obrigatório",
      });
      return;
    }
    if (cpf === 0) {
      setError({ ...error, cpf: "CPF é obrigatório" });
      return;
    }

    if (phone === 0) {
      setError({ ...error, phone: "Telefone é obrigatório" });
      return;
    }
    if (street === "") {
      setError({ ...error, street: "Rua é obrigatório" });
      return;
    }
    if (number === 0) {
      setError({ ...error, number: "Número é obrigatório" });
      return;
    }

    if (neighborhood === "") {
      setError({ ...error, neighborhood: "Bairro é obrigatório" });
      return;
    }

    if (city === "") {
      setError({ ...error, city: "Cidade é obrigatório" });
      return;
    }

    if (state === "") {
      setError({ ...error, state: "Estado é obrigatório" });
      return;
    }
    if (country === "") {
      setError({ ...error, country: "País é obrigatório" });
      return;
    }

    if (cep === 0) {
      setError({ ...error, cep: "CEP é obrigatório" });
      return;
    }

    navigation.navigate("Home");
  };

  console.log(email, password);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Animatable.Text
            animation="bounceInRight"
            style={{ color: "white", fontSize: 30, fontWeight: "bold" }}
          >
            Novo Cadastro
          </Animatable.Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.inputContainer}
              placeholder="Nome completo"
              onChange={(e) => setName(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="CPF"
              onChange={(e) => setCpf(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Telefone"
              onChange={(e) => setPhone(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Rua"
              onChange={(e) => setStreet(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Número"
              onChange={(e) => setNumber(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Complemento"
              onChange={(e) => setComplement(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Bairro"
              onChange={(e) => setNeighborhood(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Cidade"
              onChange={(e) => setCity(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Estado"
              onChange={(e) => setState(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="País"
              onChange={(e) => setCountry(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Email"
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Senha"
              autoComplete="off"
              secureTextEntry={true}
              onChange={(e) => setPassword(e.nativeEvent.text)}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="Confirmação de senha"
              autoComplete="off"
              secureTextEntry={true}
              onChange={(e) => setPasswordConfirm(e.nativeEvent.text)}
            />
            <TouchableOpacity style={styles.butonStyle} onPress={handleSignin}>
              <Text style={styles.TextButton}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingVertical: 20,
  },
  butonStyle: {
    backgroundColor: "#3e3aee",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 100,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
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
    width: 340,
    padding: 10,
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "column",
  },
});

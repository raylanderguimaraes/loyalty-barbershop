import { StatusBar } from "expo-status-bar";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Resgistrar</Text>
      <TextInput style={styles.input} placeholder="Nome e Sobrenome" />
      <TextInput
        style={styles.input}
        placeholder="Informe o email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <TextInput
        style={styles.input}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone celular"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Criar Conta</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    paddingTop: 60,
    backgroundColor: "#24303c",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
  input: {
    width: "80%",
    borderRadius: 8,
    backgroundColor: "white",
    fontSize: 22,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d18c60",
    padding: 10,
    borderRadius: 8,
    color: "white",
  },
});

import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

function MyCheckbox({ checked, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
        {checked && <Ionicons name="checkmark" size={24} color="white" />}
      </View>
    </Pressable>
  );
}

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleEmailChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleCheckboxClick = (type) => {
    setUserType(type === userType ? "" : type);
  };

  // As rotas de login estão funcionando somente selecionando o checkbox, colocando um condicional, dependendo do usuário é direcionado para sua tela. Não está sendo validado email e senha ainda do usuário
  const handleLogin = () => {
    if (userType === "barbeiro") {
      router.push("/dashboardAdmin/adminDashboard");
    } else if (userType === "cliente") {
      router.push("/dashboardClient/clientDashboard");
    } else {
      console.log("Erro ao efetuar o login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Conecte-se</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={handlePasswordChange}
      />
      <View style={styles.checkboxContainer}>
        <Pressable
          style={styles.checkLabel}
          disabled={userType === "barbeiro"}
          onPress={() => handleCheckboxClick("cliente")}>
          <MyCheckbox
            checked={userType === "cliente"}
            onPress={() => handleCheckboxClick("cliente")}
          />
          <Text style={styles.text}>Cliente</Text>
        </Pressable>
        <Pressable
          style={styles.checkLabel}
          disabled={userType === "cliente"}
          onPress={() => handleCheckboxClick("barbeiro")}>
          <MyCheckbox
            checked={userType === "barbeiro"}
            onPress={() => handleCheckboxClick("barbeiro")}
          />
          <Text style={styles.text}>Barbeiro</Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
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
  checkboxContainer: {
    flexDirection: "row",
    gap: 12,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#d18c60",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
  checkLabel: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
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

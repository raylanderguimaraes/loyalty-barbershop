import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuContainer}>
        <MaterialCommunityIcons name="mustache" size={50} color="white" />
        <Text style={styles.text}>Cartão Fidelidade</Text>

        <Link href="/signup/login" asChild style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/signup/register" asChild style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24303c",
  },
  menuContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 25,
    marginBottom: 80,
    fontWeight: "bold",
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
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },
});

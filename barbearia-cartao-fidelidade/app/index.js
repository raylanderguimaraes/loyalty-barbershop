import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Home() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Cartão Fidelidade</Text>
        <Link href="/login" asChild style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/register" asChild style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </Link>
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
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
    fontSize: 25,
    marginBottom: 80,
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

import { Text, StyleSheet, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Login</Text>
    </View>
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
})
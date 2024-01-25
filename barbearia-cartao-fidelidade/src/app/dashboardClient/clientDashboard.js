import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

// TODO
// Criar lógica para apresentar os icones de tesoura no cartão com algum tipo de laço.
// Criar lógica de numero de cortes representados pelo ícone com background verde, exemplo:
// Se o cliente estiver com 5 cortes no banco de dados isso deve ser refletido nos icones

export default function ClientDashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cutIcon}>
        <Feather name="scissors" size={60} color={"#fff"} />
      </View>
      <Text style={styles.text}>Confira quantos cortes você já tem!</Text>

      <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Text style={styles.text}>Raylander Guimarães Ramos</Text>
          <Text style={styles.text}>Data de Nascimento: 07/08/1992</Text>
          <Text style={styles.text}>Endereço: Av. Corsanto</Text>
        </View>
        <View style={styles.cardCuts}>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
          <View style={styles.cutIcon}>
            <Feather name="scissors" size={60} color={"#fff"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24303c",
    padding: 10,
  },
  card: {
    height: "auto",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#d18c60",
  },
  text: {
    color: "white",
    fontSize: 22,
  },
  cardCuts: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  cutIcon: {
    margin: 5,
    padding: 4,
    backgroundColor: "green",
    borderRadius: 50,
  },
});

import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { useState } from "react";
import ListItem from "../components/ListItem";

//TODO: Criar uma forma de deixar os menus TABS com opções específicas para cada tipo de usuário, Barbeiro e Cliente,
//por enquanto não está funcionando como deveria.

export default function AdminDashboard() {
  const [data, setData] = useState([
    { id: 1, name: "Raylander Santos da Silva Sauro", idade: 31, cortes: 5 },
    { id: 2, name: "Joao Santos da Silva Sauro", idade: 40, cortes: 10 },
    { id: 3, name: "Marcio Santos da Silva Sauro", idade: 30, cortes: 1 },
    { id: 4, name: "Carlos Santos da Silva Sauro", idade: 25, cortes: 6 },
    { id: 5, name: "Thiago Santos da Silva Sauro", idade: 20, cortes: 5 },
    { id: 6, name: "Thiago Santos da Silva Sauro", idade: 20, cortes: 5 },
    { id: 7, name: "Thiago Santos da Silva Sauro", idade: 20, cortes: 5 },
    { id: 8, name: "Thiago Santos da Silva Sauro", idade: 20, cortes: 5 },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.search}>
          <MaterialIcons name="search" size={28} color={"#fff"} />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          style={{ marginTop: 10 }}
          contentContainerStyle={{ marginHorizontal: 10 }}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Feather name="plus" size={28} color={"#fff"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24303c",
    padding: 10,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    gap: 8,
  },
  input: {
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 22,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  search: {
    backgroundColor: "#d18c60",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  listContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  addButton: {
    width: 50,
    height: 50,

    backgroundColor: "#d18c60",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "white",
    fontSize: 22,
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

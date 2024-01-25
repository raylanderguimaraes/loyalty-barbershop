import { Text, TouchableOpacity, StyleSheet } from "react-native";
export default function ListItem({ data }) {
  return (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.listText}>Nome: {data.name}</Text>
      <Text style={styles.listText}>Cortes: {data.cortes}</Text>
      <Text style={styles.listText}>Idade: {data.idade}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#d18c60",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    color: "#fff",
  },
  listText: {
    color: "#fff",
    fontSize: 20,
  },
});

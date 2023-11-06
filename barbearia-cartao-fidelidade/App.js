// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// export default function App() {
//   function login() {
//     alert("Logou");
//   }

//   function register() {
//     alert("registrou");
//   }

//   return (
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         <Text style={styles.text}>Cartão Fidelidade</Text>
//         <TouchableOpacity style={styles.button} onPress={login}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={register}>
//           <Text style={styles.buttonText}>Registrar</Text>
//         </TouchableOpacity>

//         <StatusBar style="auto" />
//       </View>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     gap: 15,
//     backgroundColor: "#24303c",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "white",
//     fontSize: 25,
//     marginBottom: 80,
//   },
//   button: {
//     width: 300,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#d18c60",
//     padding: 10,
//     borderRadius: 8,
//     color: "white",
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "800",
//   },
// });
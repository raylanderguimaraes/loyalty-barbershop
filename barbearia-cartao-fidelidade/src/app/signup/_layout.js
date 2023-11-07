import { Tabs } from "expo-router/tabs";
import { MaterialIcons } from "@expo/vector-icons";
//ToDo: Fazer o esquema de TabsBar e as rotas utilizando os botões da tabar com efeito de Stack.
export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="login" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

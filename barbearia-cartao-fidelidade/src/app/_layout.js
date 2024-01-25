import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

//TODO: Tentar resolver essa questao da statusBar, se nao der continuar criando as telas de usuários
export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}></Stack>
        <StatusBar style="light" />
    </>
  );
}



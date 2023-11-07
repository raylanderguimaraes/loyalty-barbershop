import { NavigationContainer } from "@react-navigation/native";
import "expo-router/entry";
import Routes from "./routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

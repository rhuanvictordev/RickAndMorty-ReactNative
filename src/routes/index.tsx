import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

import AppRoutes from "../app/AppRoutes";
import AuthRoutes from "../app/AuthRoutes";
import { AuthContext } from "../contexts/AuthContext";

export default function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
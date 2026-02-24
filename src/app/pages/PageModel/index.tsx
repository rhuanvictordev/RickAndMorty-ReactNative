import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../../../contexts/AuthContext";

export default function LogadoPage() {

   const {logout, user} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>ID Logado: {user?.id}</Text>
      <Text>Nome Logado: {user?.nome}</Text>
      <Text>Email Logado: {user?.email}</Text>
      <Text>Token Logado: {user?.token}</Text>
      
      <TouchableOpacity style={{marginTop:20, padding:20, backgroundColor:"#b1b1b1"}} onPress={logout}>
          <Text>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

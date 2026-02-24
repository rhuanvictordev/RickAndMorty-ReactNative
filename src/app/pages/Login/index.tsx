import { AuthContext } from "@/src/contexts/AuthContext";
import { apiLocal } from "@/src/services/api";
import { useContext, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type Login = {
  id: string;
  nome: string;
  email: string;
  token: string;
}

export default function Login(){

  const [email, setEmail] = useState("teste@email.com");
  const [senha, setSenha] = useState("12345");
  const { login, logout, user } = useContext(AuthContext);

  async function logar(){
    if (email == "" || senha == ""){
      Alert.alert("Aviso","Informe o email e a senha corretamente!");
      return;
    }
    try {
      const response = await apiLocal.post("/login", {email: email, senha: senha});
      console.log("LoginResponse:", response.data);
      login(response.data);
    } 
    catch (error: any) {
      if (error.response?.status === 401){
        Alert.alert("Aviso","Usuário ou senha inválidos");
      }else{
        alert("Erro de conexão com o servidor");
      }
      console.log(error + " - " + error.code);
    }
  }

  return(
    <View style={styles.container}>
        <Image source={require('../../../../assets/images/logo.png')} style={{width:200, height:200, borderRadius:20}}/>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputArea}>
            <View style={styles.inputBox}>
              <Text style={styles.text}>E-mail</Text>
              <TextInput style={styles.input} maxLength={32} value={email} onChangeText={(value)=>{setEmail(value)}}></TextInput>
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.text}>Senha</Text>
              <TextInput style={styles.input} maxLength={32} value={senha} onChangeText={(value)=>{setSenha(value)}}></TextInput>
            </View>
        </View>
        <View style={styles.buttonArea}>
            <TouchableOpacity onPress={logar}>
                <Text style={styles.button}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={logout}>
                <Text style={[styles.button, {backgroundColor:"#707070"}]}>Sair</Text>
            </TouchableOpacity>
            <Text>Logado: {user ? "Sim" : "Não"}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#6cc0d4"
  },
  title:{
    fontSize:26,
    marginTop:30,
    marginBottom:40
  },
  text:{
    fontWeight:"bold",
    textAlign:"left",
    fontSize:18
  },
  inputArea:{
    width:"90%",
  },
  inputBox:{
    marginBottom:30
  },
  input:{
    backgroundColor:"#ffffff",
    width:"100%",
    alignSelf:"center",
    borderRadius:8,
    height:50
  },
  button:{
    width:"100%",
    height:40,
    textAlign:"center",
    padding:10,
    backgroundColor:"#144257",
    color:"white",
    marginBottom:10
  },
  buttonArea:{
    width:"90%",
  }
})
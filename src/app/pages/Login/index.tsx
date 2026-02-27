import { AuthContext } from "@/src/contexts/AuthContext";
import { apiLocal } from "@/src/services/api";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginPage(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, user } = useContext(AuthContext);
  const navigator = useNavigation();

  async function logar(){
    if (email == "" || password == ""){
      Alert.alert("Aviso","Informe o email e a senha corretamente!");
      return;
    }
    try {
      const response = await apiLocal.post("/login", {email: email, password: password});
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


  function chamarApiGoogle(){
    Alert.alert("Aviso", "Logando com o google")
  }

  function createAccount(){
    navigator.navigate("Register" as never);
  }

  return(
    <View style={styles.container}>
        <Image source={require('../../../../assets/images/logo.png')} style={{width:60, height:60, borderRadius:10}}/>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputArea}>
            <View style={styles.inputBox}>
              <Text style={styles.text}>E-mail</Text>
              <TextInput style={styles.input} maxLength={64} value={email} onChangeText={(value)=>{setEmail(value)}}></TextInput>
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.text}>Senha</Text>
              <TextInput style={styles.input} maxLength={32} value={password} onChangeText={(value)=>{setPassword(value)}}></TextInput>
            </View>
        </View>
        <View style={styles.buttonArea}>
            
            <TouchableOpacity onPress={chamarApiGoogle} style={[styles.button, {backgroundColor:"#002fff"}]}>
                <Text style={styles.buttonText}><Image source={require("../../../../assets/images/google.png")} style={{width:30, height:30, borderRadius:1}}/>     Entrar com o Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={logar} style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor:"#3adb5544"}]} onPress={createAccount}>
                <Text>Criar conta</Text>
            </TouchableOpacity>
        </View>
        
        <Text>Logado: {user ? "Sim" : "Não"}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#6cc0d4",
  },
  title:{
    fontSize:22,
    marginTop:10,
    marginBottom:0
  },
  text:{
    fontWeight:"bold",
    textAlign:"left",
    fontSize:16
  },
  inputArea:{
    width:"90%",
  },
  inputBox:{
    marginBottom:20
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
    height:60,
    textAlign:"center",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    backgroundColor:"#144257",
    color:"white",
    marginBottom:10,
    borderWidth:1,
    borderRadius:10
  },
  buttonArea:{
    width:"90%",
  },
  buttonText:{
    color:"#FFF",
    flexDirection:"row",
    marginLeft:10,
    justifyContent:"space-between"
  }
})
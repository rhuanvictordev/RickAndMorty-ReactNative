import { AuthContext } from "@/src/contexts/AuthContext";
import { apiLocal } from "@/src/services/api";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterPage(){
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const { login, logout, user } = useContext(AuthContext);
  const navigator = useNavigation();

  async function createAccount(){
    if (email == "" || password == ""){
      Alert.alert("Aviso", "Informe o email e a senha corretamente!");
    }else{
      if (password != confirmSenha){
        Alert.alert("Aviso", "As senhas não coincidem");
      }else{
        try {
        const response = await apiLocal.post("/register", {name: name, email: email, password: password, token: 'token-' + password});
        console.log("RegisterResponse:", response.data);
        login(response.data);
        } catch (error: any) {
            if (error.response?.status === 401){
              Alert.alert("Aviso","erro 401 no Register");
            }else{
              alert("Erro de conexão com o servidor");
            }
            console.log(error + " - " + error.code);
          }
      }
    }
  }

  return(
    <View style={styles.container}>
        <Image source={require('../../../../assets/images/logo.png')} style={{width:60, height:60, borderRadius:10}}/>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.inputArea}>
            <View style={styles.inputAreaRow}>
                <View style={styles.inputBox}>
                  <Text style={styles.text}>Nome</Text>
                  <TextInput style={styles.input} maxLength={32} value={name} onChangeText={(value)=>{setName(value)}}></TextInput>
                </View>
            </View>
            <View style={styles.inputAreaColumn}>
                <View style={styles.inputBox}>
                  <Text style={styles.text}>E-mail</Text>
                  <TextInput style={styles.input} maxLength={32} value={email} onChangeText={(value)=>{setEmail(value)}}></TextInput>
                </View>

                <View style={styles.inputBox}>
                  <Text style={styles.text}>Senha</Text>
                  <TextInput style={styles.input} maxLength={32} value={password} onChangeText={(value)=>{setPassword(value)}}></TextInput>
                </View>

                <View style={styles.inputBox}>
                  <Text style={styles.text}>Confirme a Senha</Text>
                  <TextInput style={styles.input} maxLength={32} value={confirmSenha} onChangeText={(value)=>{setConfirmSenha(value)}}></TextInput>
                </View>
            </View>
        </View>
        <View style={styles.buttonArea}>
            <TouchableOpacity onPress={createAccount}>
                <Text style={styles.button}>Criar conta</Text>
            </TouchableOpacity>

        </View>
        
        <Pressable onPress={()=>navigator.goBack()}><Text>Voltar</Text></Pressable>
        
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
    fontSize:14
  },
  inputArea:{
    width:"80%",
  },
  inputAreaColumn:{
    
  },
  inputAreaRow:{
    flexDirection:"row",
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
    height:40,
    textAlign:"center",
    alignItems:"center",
    padding:10,
    backgroundColor:"#144257",
    color:"white",
    marginBottom:10,
    borderWidth:1,
    borderRadius:10
  },
  buttonArea:{
    width:"90%",
  }
})
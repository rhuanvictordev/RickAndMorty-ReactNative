import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type Personagem = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

type Props = {
  person: Personagem;
  handleClose(): void;
};

export function CharacterModal({ person, handleClose }: Props){

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Detalhes do Personagem</Text>

                <Text style={styles.textLabel}>Nome: <Text style={styles.text}>{person.name}</Text></Text>
                <Text style={styles.textLabel}>Gênero: <Text style={styles.text}>{person.gender}</Text></Text>
                <Text style={styles.textLabel}>Espécie: <Text style={styles.text}>{person.species}</Text></Text>
                <Text style={styles.textLabel}>Status: <Text style={styles.text}>{person.status}</Text></Text>

                <Image source={{ uri: person.image }} style={styles.image} />

                <Pressable onPress={handleClose}>
                    <Text style={styles.button}>Voltar</Text>
                </Pressable>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    content:{
        backgroundColor:"#FFF",
        width:"85%",
        paddingTop:24,
        paddingBottom:24,
        borderRadius:8
    },
    title:{
        textAlign:"center",
        fontSize:20,
        marginBottom:40
    },
    text:{
        fontSize:16,
        fontWeight:"400",
        color:"#000000"
    },
    textLabel:{
        fontWeight:"bold",
        marginLeft:10,
        marginBottom:8,
        fontSize:16,
        color:"#2b00ff"
    },
    image:{
        marginTop:30,
        width:180,
        height:180,
        alignSelf:"center",
    },
    button:{
        marginTop:10,
        textAlign:"center",
        padding:8,
        fontSize:16,
        fontWeight:"bold",
        backgroundColor:"#1f4956",
        color:"#FFF",
        width:"50%",
        alignSelf:"center"
    }
})
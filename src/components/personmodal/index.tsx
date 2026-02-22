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

export function ModalPerson({ person, handleClose }: Props){

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Página de detalhes</Text>
                <Text style={styles.title}>{person.name}</Text>
                <Text style={styles.title}>{person.gender}</Text>
                <Text style={styles.title}>{person.status}</Text>
                <Text style={styles.title}>{person.species}</Text>
                <Image source={{ uri: person.image }} style={{ width: 140, height: 140 }} />
            </View>

            <Pressable onPress={handleClose}>
                <Text style={styles.buttonSaveText}>Voltar</Text>
            </Pressable>
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
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000000",
        marginBottom:24
    },
    innerPassword:{
        backgroundColor:"#0E0E0E",
        width:"90%",
        padding:14,
        borderRadius:8
    },
    text:{
        color:"#FFF",
        fontSize:16,
        textAlign:"center"
    },
    buttonArea:{
        flexDirection:"row",
        width:"90%",
        marginTop:8,
        alignItems:"center",
        justifyContent:"space-between"
    },
    button:{
        flex:1,
        alignItems:"center",
        marginTop:14,
        marginBottom:14,
        padding:8
    },
    buttonText:{
        fontWeight:"bold",
        color:"#0000"
    },
    buttonSave:{
        backgroundColor:"#392EE9",
        borderRadius:8
    },
    buttonSaveText:{
        padding:14,
        borderRadius:8,
        backgroundColor:"green",
        color:"#000000",
        fontWeight:"bold"
    }
})
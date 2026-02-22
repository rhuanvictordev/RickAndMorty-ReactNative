import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};

type Props = {
  episode: Episode;
  handleClose(): void;
};


export default function EpisodeModal({episode, handleClose}:Props){

    function printar(){
        console.log(episode.characters);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.boxTitle}>{episode.name}</Text>
            <Text style={styles.innerBox}>{episode.air_date}</Text>
            <Text style={styles.boxText}>EP: {episode.episode}</Text>
            
            <Pressable onPress={printar}>
                <Text style={styles.boxTitle}>Personagens</Text>
            </Pressable>
            
            <View style={{height:"100%"}}>
                <FlatList
                style={{ flex: 1, marginTop: 14,}}
                data={episode.characters}
                keyExtractor={(item) => item}
                renderItem =
                {
                ({ item }) => (
                    <View>
                        <Text style={styles.boxText}>{item}</Text>
                    </View>
                )
                }
                
            />
            </View>

            <TouchableOpacity onPress={handleClose} activeOpacity={0.7}>
                <Text style={styles.button}>Voltar</Text>
            </TouchableOpacity>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(0, 0, 0, 0.79)",
        marginTop:60,
        marginBottom:60,
        marginLeft:10,
        marginRight:10
    },
    boxTitle:{
        marginTop:10,
        textAlign:"center",
        width:"95%",
        backgroundColor:"#397489",
        color:"black",
        fontSize:18,
        fontWeight:"bold",
        padding:10,
        marginLeft:10,
        marginRight:10
    },
    boxText:{
        color:"white",
        fontSize:16,
        fontWeight:"bold",
        textAlign:"left",
        paddingLeft:10
    },
    innerBox:{
        color:"white",
        fontSize:18,
        textAlign:"center",

    },
    button:{
        marginTop:"100%",
        padding:8,
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        backgroundColor:"#1d506b",
        textAlign:"center"
    }
})

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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


export default function EpisodeModal({ episode, handleClose }: Props) {
  const navigation = useNavigation();

  function goDetails() {
    alert("indo para detalhes")
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>

        <Text style={styles.title}>Detalhes do Episódio</Text>

        <View style={styles.textBox}>
          <Text style={styles.textLabel}>
            Nome: <Text style={styles.text}>{episode.name}</Text>
          </Text>

          <Text style={styles.textLabel}>
            Data: <Text style={styles.text}>{episode.air_date}</Text>
          </Text>

          <Text style={styles.textLabel}>
            Personagens: <Text style={styles.text}>{episode.characters.length}</Text>
          </Text>
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity
            onPress={handleClose}
            activeOpacity={0.7}
            style={[styles.button, { backgroundColor: "#485453" }]}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goDetails}
            activeOpacity={0.7}
            style={[styles.button, { backgroundColor: "#299b93" }]}
          >
            <Text style={styles.buttonText}>Mais Detalhes</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#00000073",
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        padding:30,
        backgroundColor:"white",
        marginLeft:10,
        marginRight:10,
        borderRadius:8,
    },
    textBox:{
        textAlign:"left",
        marginBottom:10
    },
    title:{
        textAlign:"center",
        marginBottom:10,
        fontWeight:"bold",
        fontSize:20
    },
    text:{
        fontWeight:"regular"
    },
    textLabel:{
        fontWeight:"bold"
    },
    buttonBox:{
        width:"80%",
        flexDirection:"row"
    },
    button:{
        margin:5,
        width:"50%",
        alignItems:"center",
        alignSelf:"center",
        padding:10,
        backgroundColor:"#199aad"
    },
    buttonText:{
        color:"#FFF",
        fontWeight:"bold"
    }
})

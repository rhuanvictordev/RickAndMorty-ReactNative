import EpisodeModal from "@/src/components/episodeModal";
import { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { api } from "../../../services/api";

export default function ListEpisodePage() {

type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};

function handleClose(){
  setModalVisible(false);
}

const [episodes, setEpisodes] = useState<Episode[]>([]);
const [modalVisible, setModalVisible] = useState(false);
const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  useEffect(() => {
      buscarEpisodios();
    }, []);

  async function buscarEpisodios(){
  try {
      const response = await api.get("/episode");
      setEpisodes(response.data.results);
    } catch (error) {
      console.log(error);
    }
}

return (
  <View style={styles.container}>
    <FlatList
      style={{ flex: 1, marginTop: 14, width:"90%"}}
      data={episodes}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem=
      {({ item }) => 

      <Pressable onPress={() => {setSelectedEpisode(item); setModalVisible(true)}}>
          <View style={styles.box}>
            <Text style={styles.boxTitle}>{item.name}</Text>
            <Text style={styles.boxText}>Air Date: {item.air_date}</Text>
            <Text style={styles.boxText}>Episode: {item.episode}</Text>
          </View>
      </Pressable>

      }
      />

      <Modal visible={modalVisible} animationType="fade" transparent>
            {selectedEpisode && (<EpisodeModal episode={selectedEpisode} handleClose={handleClose}/>)}
          </Modal>
      
  </View>
)

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#e2e2e2",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:50,
    paddingBottom:12
  },
  box:{
    padding:10,
    backgroundColor:"#313d2e",
    margin:4
  },
  boxTitle:{
    color:"yellow",
    fontSize:20,
    fontWeight:"bold"
  },
  boxText:{
    color:"white"
  }
})

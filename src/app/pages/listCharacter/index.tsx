import { CharacterModal } from "@/src/components/characterModal";
import { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, StyleSheet, View } from "react-native";
import Person from "../../../components/character/Character";
import { api } from "../../../services/api";

export default function ListCharacterPage() {

type Person = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
};

const [personagens, setPersonagens] = useState<Person[]>([]);
const [modalVisible, setModalVisible] = useState(false);
const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);


  useEffect(() => {
    buscarPersonagens();
  }, []);

  async function buscarPersonagens() {
  try {
    const response = await api.get("/character");
    setPersonagens(response.data.results);
  } catch (error) {
    console.log(error);
  }
}

function handleClose(){
  setModalVisible(false)
}

return (
  <View style={styles.container}>
    <FlatList
      style={{ flex: 1, marginTop: 14, width:"90%"}}
      data={personagens}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.id)}
      renderItem=
      {({ item }) => 

      <Pressable onPress={() => {setSelectedPerson(item); setModalVisible(true);}}>
        <Person name={item.name} image={item.image} gender={item.gender}/>
      </Pressable>

      }
      />

    <Modal visible={modalVisible} animationType="fade" transparent>
      {selectedPerson && (<CharacterModal person={selectedPerson} handleClose={handleClose}/>)}
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
  }
})

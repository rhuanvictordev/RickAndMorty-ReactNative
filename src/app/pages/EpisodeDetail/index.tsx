import { StyleSheet, Text, View } from "react-native";

type Episode ={
    id: string;
    name: string;
    created_date: string;
    persons: string[];
    url: string;
    show_date: string;
}

export default function EpisodeDetail(ep:Episode){
    return(
        <View style={styles.container}>
            <Text>Detalhes do episódio tal: {ep.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
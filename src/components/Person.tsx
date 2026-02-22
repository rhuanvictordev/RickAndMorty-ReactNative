import { Image, StyleSheet, Text, View } from "react-native";

type Person = {
        id: number;
        name: string;
        image: string;
        status: string;
        species: string;
        gender: string;
        origin: object;
        location: object;
        episode: string[];
    }

export default function Person({name, image}:Person){
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.box}>
                    <Text style={styles.texto}>{name}</Text>
                    <Image src={image} style={styles.image}></Image>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
        width:"100%",
        height:"100%"
    },
    box:{
        width:"100%",
        height:"100%"
    },
    texto:{
        fontSize:18,
        textAlign:"center"
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:8
    }
})
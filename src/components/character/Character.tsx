import { Image, StyleSheet, Text, View } from "react-native";

type Person = {
        name: string;
        image: string;
        gender: string;
    }

export default function Character({name, image, gender}:Person){
    
    return(
        <View style={styles.container}>
                <View style={styles.box}>
                    <Image src={image} style={styles.image}></Image>
                    <View style={styles.textBox}>
                        <Text style={styles.textLabel}>Nome: <Text style={styles.text}>{name}</Text></Text>
                        <Text style={styles.textLabel}>Gênero: <Text style={styles.text}>{gender}</Text></Text>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    box:{
        width:"100%",
        textAlign:"left",
        backgroundColor:"#b1c6c4",
        borderRadius:0,
        alignItems:"center",
        marginTop:0,
        marginBottom:20,
        flexDirection:"column",
        paddingBottom:10,
        paddingTop:10
    },
    textBox:{
        width:"95%"
    },
    textLabel:{
        fontSize:14,
        fontWeight:"600"
    },
    text:{
        fontSize:14,
        fontWeight:"regular"
    },
    image:{
        width:100,
        height:100,
        borderRadius:8,
    }
})
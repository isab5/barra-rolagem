import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Card({candy, onPress}){
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.doces}>{candy ? candy.name : "doces"}</Text>
            <Text>{candy ? candy.role : "Descrição"}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        margin: 10,
        height: 60,
        alignItems: "center",
    },
    doces:{
        fontSize:16,
        fontWeight:"bold",
    },
});
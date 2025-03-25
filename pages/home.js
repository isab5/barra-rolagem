import React from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet, Dimensions } from "react-native"; // dimensions é um módulo que fornece informações sobre as dimensões da tela do dispositivo
import Card from "../components/Card";
import Header from "../components/Header";

export default function HomeScreen({ navigation }) {
    const professores = [
        { id: "1", name: "Marcello", role: "Professor" },
        { id: "2", name: "Thiago", role: "Professor" },
        { id: "3", name: "Edu", role: "Professor" },
        { id: "4", name: "Felipe", role: "Professor" },
    ];

    const alunos = [
        { id: "1", name: "Enzo", role: "Aluno de Mobile" },
        { id: "2", name: "Alejandra", role: "Aluna de BackEnd" },
        { id: "3", name: "Julia", role: "Aluna de Design" },
        { id: "4", name: "Evelyn", role: "Aluna de Algoritmos" },
        { id: "5", name: "Isabella", role: "Aluna de Mobile" },
        { id: "6", name: "Lucas", role: "Aluno de BackEnd" },
        { id: "7", name: "Caio", role: "Aluno de Design" },
        { id: "8", name: "Luzia", role: "Aluna de Algoritmos" },
        { id: "9", name: "Ana", role: "Aluna de Mobile" },
        { id: "10", name: "Maria", role: "Aluna de BackEnd" },
        { id: "11", name: "Laura", role: "Aluna de Design" },
        { id: "12", name: "Anna", role: "Aluna de Algoritmos" },
    ];

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

     // SafeAreaView é um componente que garante que o conteúdo da tela não seja cortado em dispositivos com notch, por exemplo. Notch é a parte superior da tela onde ficam a câmera e os sensores.

    return (
        <SafeAreaView>
            <Header />

            <Text style={styles.sectionTitle}>Professores</Text>
            <FlatList
                style={styles.horizontalList}
                data={professores}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { width: cardWidth }]}>
                        <Card employee={item} onPress={() => navigation.navigate("Details", { employee: item })} />
                    </View>
                )}
            />

            <Text style={styles.sectionTitle}>Alunos</Text>
            <FlatList
                data={alunos}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                        <Card employee={item} onPress={() => navigation.navigate("Details", { employee: item })} />
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 20,
        textAlign: "center",
    },
    cardContainer: {
        marginHorizontal: 10,
        marginBottom: 0,
    },
    horizontalList: {
        paddingBottom: 30,
    },
});
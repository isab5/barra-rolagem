import React from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet, Dimensions, ScrollView, SectionList } from "react-native"; 
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
    const salgados = [
        { id: "1", name: "Strogonoff", role: "Prato" },
        { id: "2", name: "Hamburguer", role: "Lanche" },
        { id: "3", name: "Pizza", role: "Prato" },
        { id: "4", name: "Lasanha", role: "Prato" },
    ];

    const doces = [
        { id: "1", name: "Brigueiro", role: "Doce" },
        { id: "2", name: "Beijinho", role: "Doce" },
        { id: "3", name: "Bolo", role: "Doce" },
        { id: "4", name: "Torta", role: "Doce" },
        { id: "5", name: "Cupcake", role: "Doce" },
    ];

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView style={styles.container}>
             <ScrollView style={styles.scrollContainer}>
            <Text style={styles.sectionTitle}>Salgados</Text>
            <FlatList
                style={styles.horizontalList}
                data={salgados}
                horizontal
                showsHorizontalScrollIndicator={true}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.cardContainer, { width: cardWidth }]}>
                        <Card candy={item} onPress={() => navigation.navigate("Details", { candy: item })} />
                    </View>
                )}
                />

            <Text style={styles.sectionTitle}>Sobremesas</Text>
            <SectionList
                    style={styles.verticalList}
                    sections={[
                        { data: doces}
                    ]}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.cardContainer, { width: cardWidth }]}>
                            <Card candy={item} onPress={() => navigation.navigate("Details", { candy: item })} />
                        </View>
                    )}
                />
                </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafad2',
        flex: 2,
        paddingTop: 20,
        height: "100vh",
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 20,
        textAlign: "center",
    },
    cardContainer: {
        backgroundColor: '#B62625',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    horizontalList: {
        paddingBottom: 30,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        textAlign: "center",
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
    verticalList: {
        paddingLeft: 350,
    },
    scrollContainer: {
        paddingHorizontal: 10,
    },
});
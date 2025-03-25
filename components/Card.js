import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Card({ employee, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.name}>{employee.name}</Text>
            <Text>{employee.position}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        margin: 10,
        height: 60,
        alignItems: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
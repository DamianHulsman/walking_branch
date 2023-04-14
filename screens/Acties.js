import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Button } from 'react-native';
const Acties = () => {
    try {

        return (
            <SafeAreaView style={{margin: 0, marginBottom: 45, alignItems: 'center'}}>
                <ScrollView>
                    <Text>Acties is nog Work in Progress</Text>
                </ScrollView>
            </SafeAreaView>
        );
    } catch (err) {
        console.log(err);
    }
}

const styles = StyleSheet.create({
    tableitem: {
        backgroundColor: '#0ff',
        borderColor: '#000',
        borderWidth: 1,
        padding: 2,
        margin: 0,
        maxWidth: 180,
        minWidth: 50,
    }
});

export default Acties;
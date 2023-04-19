import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Kamp = () => {
    try {
        return(
            <SafeAreaView>
                <Text style={styles.pagetitle}>Kamp</Text>
                <Text style={{alignSelf: 'center'}}>Work in Progress</Text>
            </SafeAreaView>
        )
    } catch(err) {
        console.error(err);
        alert(err.message);
    }
}

const styles = StyleSheet.create({
    tableitem: {
        backgroundColor: '#0ff',
        borderColor: '#000',
        borderWidth: 1,
        padding: 2,
        margin: 0,
        width: 180,
    },
    pagetitle: {
        fontSize: 25,
        borderColor: '#0f0',
        borderWidth: 2,
        borderRadius: 15,
        padding: 5,
        alignItems: "center",
        width: '100%'
    }});

export default Kamp;
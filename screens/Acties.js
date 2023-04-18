import React from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View } from 'react-native';
const Acties = () => {
    try {

        return (
            <SafeAreaView style={{margin: 0, marginBottom: 45, alignItems: 'center', alignSelf: 'center'}}>
                <ScrollView>
                    <View>
                        <Text style={styles.pagetitle}>Acties</Text>
                        <Text style={{alignSelf: 'center'}}>Work in Progress</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    } catch (err) {  
        console.error(err);
        alert('Error: ' + err.message);
    }
}

const styles = StyleSheet.create({
    pagetitle: {
        fontSize: 25,
        borderColor: '#00f',
        borderWidth: 2,
        borderRadius: 15,
        padding: 5,
        alignItems: "center",
        alignSelf: 'center',
    }
});

export default Acties;
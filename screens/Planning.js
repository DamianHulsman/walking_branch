import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Button } from 'react-native';
import data from '../assets/planning.json';

const Planning = () => {
    try {
        const [plan, setPlan] = useState([]);

        const planningdata = async () => {
            const jsonfile = data.data;
            const planElements = jsonfile.map(el => (
                <View style={{ padding: 10 }} key={el.id}>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.date}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.organisers}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.activity}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>€{el.cost}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Button onPress={() => { alert('Kan nog niet bewerken \nWork in progress'); }} title="Edit"></Button></View>
                </View>
            ));
            setPlan(planElements);
        };

        React.useEffect(() => {
            planningdata();
        }, []);
        return (
            <SafeAreaView style={{margin: 0, marginBottom: 45, marginTop: 30, alignItems: 'center', maxHeight: 600}}>
                <Text style={styles.pagetitle}>Planning</Text>
                <ScrollView style={{marginTop: 10}}>
                    {plan}
                </ScrollView>
            </SafeAreaView>
        );
    } catch (err) {  
        console.error(err);
        alert('Error: ' + err.message);
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
    },
    pagetitle: {
        fontSize: 25,
        borderColor: '#0f0',
        borderWidth: 2,
        borderRadius: 15,
        padding: 5,
        alignItems: "center"
    }
});

export default Planning;
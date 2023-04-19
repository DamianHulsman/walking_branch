import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Button } from 'react-native';
import data from '../assets/planning copy.json';
// import * as fs from 'fs';

const Planning = () => {
    try {
        const [plan, setPlan] = useState([]);

        const planningdata = () => {
            const jsonfile = data.data;
            const planElements = jsonfile.map(el => (
                <View style={{ padding: 10, height: 200, flex: 1 }} key={el.id}>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.date}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.organisers}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.activity}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>€{el.cost}</Text></View>
                    <View style={[styles.tableitem, {alignItems: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1}]} id="planningtable">
                        <Button style={{flex: 1}} onPress={() => { alert(`Opkomst:\nDatum: ${el.date}\nOrganisatie: ${el.organisers}\nActiviteit: ${el.activity}\nKosten: €${el.cost}`); }} title="    View    " />
                        <Button style={{flex: 1}} disabled={el.disabled} onPress={() => { alert('Kan nog niet bewerken \nWork in progress'); }} title="    Edit    " />
                    </View>
                </View>
            ));
            setPlan(planElements);
        };

        React.useEffect(() => {
            planningdata();
        }, []);

        return (
            <SafeAreaView style={{margin: 0, marginTop: 30, alignItems: 'center', maxHeight: 600}}>
                <Text style={[styles.pagetitle, {alignSelf: 'center'}]}>Opkomsten</Text>
                <ScrollView horizontal>
                        {plan}
                </ScrollView>
            </SafeAreaView>
        );
    } catch (err) {  
        console.error(err);
        // alert('Error: ' + err.message);
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
        width: '100%',
    }
});

export default Planning;
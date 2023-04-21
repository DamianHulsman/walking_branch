import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, ScrollView, View, Button } from 'react-native';
import data from '../assets/acties.json';
const Acties = () => {
    try {
        const [actie, setActies] = useState([]);

        const actiedata = () => {
            const jsonfile = data.data;
            const actieElements = jsonfile.map(el => (
                <View style={{ padding: 10, height: 200, flex: 1 }} key={el.id}>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.name}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.dates[0].datum}</Text></View>
                    <View style={styles.tableitem} id="planningtable"><Text>{el.loon} per uur</Text></View>
                    <View style={[styles.tableitem, {alignItems: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 1}]} id="planningtable">
                        <Button style={{flex: 1}} onPress={() => { alert(`Actie:\nNaam: ${el.name}\nDatum: ${el.dates[0].datum} \nTijden: \n    ${el.dates[0].times[0].time}\nLoon: ${el.loon}`); }} title="    View    " />
                        <Button style={{flex: 1}} disabled={el.disabled} onPress={() => { alert('Kan nog niet bewerken \nWork in progress'); }} title="    Edit    " />
                    </View>
                </View>
            ));
            setActies(actieElements);
        };

        React.useEffect(() => {
            actiedata();
        }, []);
        return (
            <SafeAreaView style={{ margin: 0, marginBottom: 0 }}>
                <ScrollView>
                    <View>
                        <Text style={styles.pagetitle}>Acties</Text>
                        <ScrollView horizontal>
                            {actie}
                        </ScrollView>
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
    }
});

export default Acties;
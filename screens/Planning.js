import React, { useState } from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import data from './planning.json';
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
                </View>
            ));
            setPlan(planElements);
        };

        React.useEffect(() => {
            planningdata();
        }, []);
        return (
            <SafeAreaView style={{margin: 0, marginBottom: 45, alignItems: 'center'}}>
                <ScrollView>
                {plan}
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

export default Planning;
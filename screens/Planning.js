import React, {useState} from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from 'react-native';


const Planning = () => {

    
    return (
        <SafeAreaView style={{ padding: 10, flexDirection: 'row' }}>
            <View style={styles.tableitem} id="planningtable"><Text>Datum</Text></View>
            <View style={styles.tableitem} id="planningtable"><Text>Organisatie</Text></View>
            <View style={styles.tableitem} id="planningtable"><Text>Activiteit</Text></View>
            <View style={styles.tableitem} id="planningtable"><Text>Kosten</Text></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    },
    tableitem: {
        backgroundColor: '#0ff',
        borderColor: '#000',
        borderWidth: 3
    }
  });

export default Planning;
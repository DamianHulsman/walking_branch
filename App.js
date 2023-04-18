import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Snavigator from './Snavigator';
import Planning from './screens/Planning';
// import Acties from './screens/Acties';
import { SafeAreaView, /* ScrollView,*/ Text, View, StyleSheet,  } from 'react-native';

export default function App() {
  try {
    return (
      <SafeAreaView>
        <View style={{ marginTop: 50, alignContent: 'center', alignSelf: 'center' }}>
          <Text style={styles.AppHeader}>
            Walking Branch App
          </Text>
          <Text style={{ margin: 5 }}>
            Dit is de Walking Branch app gemaakt door Damian,
            voor nu staat er alleen maar een planning op maar ik ben ook bezig met acties en zomerkamp dingen te implementeren.
            Als je vragen hebt stel ze gerust via WhatsApp
          </Text>
        </View>

        <Planning />
        {/* <Acties /> */}
      </SafeAreaView>
    );
  } catch (err) {
    console.error(err);
    alert('Error: ' + err.message);
  }
}

const styles = StyleSheet.create({
  AppHeader: {
    fontSize: 25,
    color: '#7cbe44',
    borderColor: '#75a201',
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    alignSelf: 'center',
  }
});

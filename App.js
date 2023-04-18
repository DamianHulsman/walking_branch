import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Snavigator from './Snavigator';
import Planning from './screens/Planning';
import Acties from './screens/Acties';
import { SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  try {
    return (
      <SafeAreaView style={{}}>
        <Planning />
        <Acties />
      </SafeAreaView>
    );
  } catch (err) {
    console.error(err);
    alert('Error: ' + err.message);
  }
}
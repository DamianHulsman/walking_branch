import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Snavigator from './Snavigator';

export default function App() {
  try {
    return (
      <NavigationContainer>
        <Snavigator />
      </NavigationContainer>
    );
  } catch (err) {
    console.error(err);
    alert('Error: ' + err.message);
  }
}
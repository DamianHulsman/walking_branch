import React, {useState} from "react";
import { View, Text, Button, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {    
    const nav = useNavigation();
    
    return (
        <SafeAreaView style={{flex: 1, alignItems: "center"}}>
            <Button onPress={() => {
                console.log("test");
            }} title="test" />
            <Button onPress={() => nav.navigate('Planning')} title="Planning"></Button>
        </SafeAreaView>
    )
}

export default Home;
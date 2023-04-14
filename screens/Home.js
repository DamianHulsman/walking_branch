import React from "react";
import { Button, Image, SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {    
    const nav = useNavigation();
    
    return (
        <SafeAreaView style={{flex: 1, alignItems: "center", marginTop: 10}}>
            <Button onPress={() => nav.navigate('Acties')} title="Acties"></Button>
            <Button onPress={() => nav.navigate('Planning')} title="Planning"></Button>
            <Image source={ require('../assets/walkingbranchlogo2.png')} style={{ height: 302, width: 396 }} />
        </SafeAreaView>
    )
}

export default Home;
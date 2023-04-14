import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/Home';
import Planning from "./screens/Planning";
import Acties from "./screens/Acties";

// import DrawerContent from "./screens/drawer";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Planning" component={Planning}/>
                <Stack.Screen name="Acties" component={Acties}/>
            </Stack.Group>
        </Stack.Navigator>
    );

};
export default StackNavigator;
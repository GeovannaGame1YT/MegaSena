import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, AppRegistry } from "react-native";
import { View, Button } from "react-native";
import { Alert } from 'react-native';

const MegaSena = () => {

    const numero = [0, 1, 2, 3, 4, 5, 6]
    
    var numeros = Math.random();
    numeros = Math.floor(numero[''] = numeros *6)
    
    alert(numeros);
    

}
const Mega = () => {
return(
    <View>
        <Text>Gerar Número da Mega Sena</Text>
        
        <Button
        onPress={() => Alert.alert(
            'numeros gerados', numeros[''])}
        title="Gerar numeros"
        />
    </View>
);
};

export default MegaSena;
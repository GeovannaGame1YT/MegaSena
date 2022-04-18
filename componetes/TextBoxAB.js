import React from "react";
import { SafeAreaView, StyleSheet,Text, TextInput } from "react-native";
import { View, Button } from "react-native";
import { Alert } from 'react-native';

const TextBoxAB = () => {
    const [numero, onChangeNumber] = React.useState(null);
    const [number, onChangeNumberL] = React.useState(null);
    const [resultado] = React.useState(null);

   /* function calcular(){
        const splitNumber = numero.split(' ')
        const fistNumber = parseFloat(splitNumber[0])
        const lastNumber = parseFloat(splitNumber[2])
        const operator = splitNumber[1]

        switch (operator) {
            case '+':
                onChangeNumber((fistNumber + lastNumber).toString())
                return
        }
    }
    function handleInput(buttonPressed) {
        console.log(buttonPressed)
        onChangeNumber(numero + " " + buttonPressed + " ")
        onChangeNumber(number + buttonPressed)
        return
        
    }*/
    
    function m(){
        
        Alert.alert(
            'O resultado é ', numero + ' + ' + number + ' = ' )

    }

    return (
        <SafeAreaView>
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={numero}
            placeholder="Coloque um número"
            keyboardType="numeric"
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumberL}
            value={number}
            placeholder="Coloque um número"
            keyboardType="numeric"
            />
            
            <Button 
            title='Resultado'
            onPress={() => m()}
            />
            
        </SafeAreaView>
        
    );
   
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding:10,
    },
        container: {
            
            alignItems: 'center',
            justifyContent: 'center',
        }
    
});

export default TextBoxAB;
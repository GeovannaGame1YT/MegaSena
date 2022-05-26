import React from "react";
import {View, Text, StyleSheet, Button, ScrollView, SafeAreaView} from "react-native";

const maxNumbers = 60;
let list = [];

for (let i = 0; i < maxNumbers; i++){
    list[i] = i + 1;
}

console.log(list);

let randomNumber;
let tmp;

for (let i = list.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = list[randomNumber];
    list[randomNumber] = list[i];
    list[i] = tmp;
}
console.log(list);
export default GerarJogo
//isto foi um teste vou modificalo para funcionar melhor 
import React from "react";
import {View, Text, StyleSheet, Button, ScrollView, SafeAreaView} from "react-native";
//import email from 'react-native-email'
//import Mega from "./components/mega/mega";
import Mega from "./mega/mega";
import EnviaEmail from "./componentes/EnviaEmail"; //inport do sistema de envio do email




const App = ()=>{        
        
    return (
    <SafeAreaView style={MainStyle.main}>
            <Mega/>
            <EnviaEmail/>
            {
                
            }
   </SafeAreaView>
    )
    }


    const MainStyle = StyleSheet.create({
        main:{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        }
    })


export default App;
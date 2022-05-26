import React from "react";
import {View, Text, StyleSheet, Button, ScrollView, SafeAreaView} from "react-native";
//import Mega from "./components/mega/mega";
import Mega from "./mega/mega";
import EnviaEmail from "./componentes/EnviaEmail";




const App = ()=>{        
        
    return (
    <SafeAreaView style={MainStyle.main}>
            <Mega/>
            
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
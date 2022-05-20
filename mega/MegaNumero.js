import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//import Estilo from "react-native"

export default ({num})=>{
       return(

           <View style={style.Container}>
                <Text style={Estilo.txtG + style.Num}>
                    {num}
                </Text>
           </View>
)   
}

const style = StyleSheet.create({
    Container:{
        height: 50,
        width: 50,
        backgroundColor: "aqua",
        margin: 5,
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column'

    },
    Num:{  
        color: "#FFF",
        fontSize: 35,
    }
})

const Estilo = StyleSheet.create({
    txtG:{
        fontSize: 30
    }
})

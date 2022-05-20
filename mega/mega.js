import React, { Component } from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
//import estilo from "../estilo"
import MegaNumero from "./MegaNumero"

export default class Mega extends Component{
        
    

      state = {
            qntdNumero: this.props.qntdNumero,
            numeros: []
        } 


        // constructor(props){
        //     super(props)
        //     this.alteraNum = this.alteraNum.bind
        // }


        alteraNum = (qntd)=>{
            this.setState({qntdNumero: + qntd})
        }


        gerarNumeroNaoContido = nums => {
            const novo = parseInt(Math.random()*60+1)
            return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
        }

        gerarNumeros = ()=>{

            const numeros = Array(this.state.qntdNumero)
                .fill()
                .reduce(n=> [...n, this.gerarNumeroNaoContido(n)], [])
                .sort()

            this.setState({numeros:numeros})
            
            console.log(numeros);

        }
       
        exibirNumeros = ()=>{
            const nums = this.state.numeros
            return nums.map(num=>{
                return <MegaNumero key={num} num={num}/>
            })
        }

    


    render(){
        return( 
            
            <>
            <Text style={{ fontWeight: 'bold' }}></Text>
            <Text style={Estilo.txtG}>
                Gerador da Mega-Sena - {this.state.qntdNumero}
                 
            </Text>

            <TextInput 
                keyboardType={'number-pad'} 
                keyboardAppearance={'dark'}
                placeholder={"digite um número 1 a 10"}
                KeyboardAvoidingView
                value={this.state.qntdNumero}
                onChangeText={this.alteraNum}
                
            /> 
            

            <Button 
            title="clique aqui" 
            onPress={this.gerarNumeros}
            />

            <View style={{
                display: "flex",
                flexDirection:"row",
                marginTop: 20,
                flexWrap: "wrap",
                justifyContent: "center"
                }}>
                    {this.exibirNumeros()}
            </View>


            </>
        
        )
    }
}


const Estilo = StyleSheet.create({
    txtG:{
        fontSize: 30
    }
})

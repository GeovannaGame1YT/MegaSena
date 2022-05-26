import React, { Component } from 'react'
import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
//import estilo from "../estilo"
import MegaNumero from "./MegaNumero"

export default class Mega extends Component{
        
    

      state = {
            qntdNumero: this.props.qntdNumero,
            numeros: []
        } 

        /*novo inportação criada para test */
        jogo = {
            qnatNum: this.props.qnatNum,
            numero: []
        }
        alteraNumR = (result)=>{
            this.setState({qnatNum: + result})
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
        /* nova inplementação para tesete ainda não esta funcionando coretamente */
        gerarjogos = nums => {
            if(nums >= 6){
                const novo = parent(Math.random()*60+1)
                return nums.includes(novo) ? this.gerarjogos(nums) : novo
            }
            
        }

        gerarNumeros = ()=>{

            const numeros = Array(this.state.qntdNumero)
                .fill()
                .reduce(n=> [...n, this.gerarNumeroNaoContido(n)], [])
                .sort()

            this.setState({numeros:numeros})
            
            console.log(numeros);

        }
        /*novo inportação criada para test */
        gerarjogo = ()=>{
            const numero = Array(this.jogo.qnatNum)
            .fill()
            .reduce(n=> [...n, this.gerarjogos(n)], [])
            .sort()
            this.setState({numero:numero})

            console.log(numero);
        }

        exibirNumeros = ()=>{
            const nums = this.state.numeros
            return nums.map(num=>{
                return <MegaNumero key={num} num={num}/>
            })
        }

        /*novo inportação criada para test */
        exibirJogo = ()=>{
            const nums = this.jogo.numero
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
                {/*novo inportação criada para test */}
                {this.jogo.qnatNum}
            </Text>

            <TextInput 
                keyboardType={'number-pad'} 
                keyboardAppearance={'dark'}
                placeholder={"digite um número 1 a 10"}
                KeyboardAvoidingView
                value={this.state.qntdNumero}
                onChangeText={this.alteraNum}
                
            /> 
            {/*novo inportação criada para test */}
            <TextInput 
                keyboardType={'number-pad'} 
                keyboardAppearance={'dark'}
                placeholder={"Gerar Jogo"}
                KeyboardAvoidingView
                value={this.jogo.qnatNum}
                onChangeText={this.alteraNum}
                
            />

            <Button 
            title="clique aqui" 
            onPress={this.gerarNumeros}
            />
            {/*novo inportação criada para test */}
            <Button
            title="Gerar jogo"
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

{/*novo inportação criada para test */}
            <View style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 20,
                flexWrap: "wrap",
                justifyContent: "center"
            }}>
                {this.exibirJogo()}
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

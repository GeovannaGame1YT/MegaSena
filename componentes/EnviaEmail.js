import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import email from 'react-native-email'

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <br/>
                <Button title="Enviar email" onPress={this.handleEmail} />
            </View>
        )
    }

    handleEmail = () => {
        const to = ['geovanna.gomes.silva@hotmail.com'] // string ou array de endereços de e-mail
        email(to, {
            // Argumentos da estrutura do email
            cc: ['Numeros Sortiados da Mega Sena'], // string ou array de endereços de e-mail
            bcc: 'this.alteraNum', // string ou array de endereços de e-mail
            subject: 'Números gerados da MegaSena',
            body: 'Números gerado da Mega Sena $[(exibirNumeros)]'
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

//Alelui o email esta funcionado agora só falta o banco de dados
//Casso de erro coloque no CMD npm install react-native-email
//para instalar o sistema de envio de email
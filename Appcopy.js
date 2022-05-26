
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import ScrollViewContext from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import MeuComponente from './componentes/MeuComponente';

export default function App() {
  return ( 

   
  <View style={styles.container}>
  <StatusBar style="auto" />
  <Text style={styles.title}>meu primeiro App</Text>
  <View style={styles.card}>
  <Text style={styles.cardtitle}>React Native</Text>
  <Text style={styles.cardSubtitle}> Criando aplicacoes de android e ios</Text>
  </View>
  <meucomponente/>
  </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    fontsize: 24,
    marginBottom: 24
  },
  card: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 3
  },
  cardTitles: {
    fontSize: 18,
    fontWeight: 'Bold'
  },
  cardSubtitle: {
    color: '#999',
    fontsize: 14
  }
  

});


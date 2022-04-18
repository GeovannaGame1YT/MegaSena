import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextBoxAB from './componetes/TextBoxAB';
import MegaSena from './componetes/MegaSena';

export default function App() {
  return (
    <View style={styles.container}>
      <TextBoxAB/>
      <MegaSena/>
      <Text>Teste do TextBox AB</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

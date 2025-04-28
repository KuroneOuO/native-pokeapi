import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Aleatorios from './src/componentes/aleatorios';
import Capturados from './src/componentes/capturados';
import Favoritos from './src/componentes/favoritos';
import Lista from './src/componentes/lista';
import Usuario from './src/componentes/usuario';
import Pokemon from './src/componentes/pokemon';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista/>
      <Aleatorios/>
      <Capturados/>
      <Favoritos/>
      <Usuario/>
      <Pokemon/>
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

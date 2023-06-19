import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, SafeAreaView, Button, View} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
        <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
  },
  text:{
    fontSize:18,
  }
});

import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../../assets/festa.jpg')} style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.title}>🎉 Bem-vindo à Festa Julina do IFC-Campus Videira!</Text>
 
        <Button title="Ver Cardápio" onPress={() => navigation.navigate('Menu')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center' },
  container: { alignItems: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', color: 'black', marginBottom: 20, textAlign: 'center', backgroundColor: '#daeefe' },
});
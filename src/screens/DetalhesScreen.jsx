import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.imagem} style={styles.img} />
      <Text style={styles.title}>{item.nome}</Text>
      <Text style={styles.desc}>Preço: R${item.preco}</Text>
      <Text style={styles.desc}>Ingredientes: {item.ingredientes}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  img: { height: 200, width: '100%', borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  desc: { fontSize: 16, marginTop: 10, marginBottom: 15 },

});

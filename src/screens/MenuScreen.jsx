import React, { useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import comidas from '../data/comidas';
import { Ionicons } from 'react-native-vector-icons';

export default function MenuScreen({ navigation }) {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (item) => {
    setFavoritos((prev) =>
      prev.includes(item.nome) ? prev.filter(f => f !== item.nome) : [...prev, item.nome]
    );
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Cardápio da Festa Julina do IFC-Campus Videira</Text>
       <Text style={styles.texto}>Clique nas imagens para mais informações!</Text>

      <FlatList
        data={comidas}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhes', { item })}
            onLongPress={() => toggleFavorito(item)}
            style={[styles.card, favoritos.includes(item.nome) && styles.favorito]}
          >
            <Image source={item.imagem} style={styles.img} />
            <Text style={styles.nome}>{item.nome} – R${item.preco}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  voltarButton: {
    backgroundColor: '#ff6600',
    padding: 10,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  card: { backgroundColor: '#ffd', padding: 10, marginBottom: 10, borderRadius: 10 },
  img: { height: 250, width: '100%', borderRadius: 10 },
  nome: { fontSize: 18, marginTop: 5 },
  favorito: { backgroundColor: '#ffe0b2' },
  texto: {fontSize: 13, textAlign: "center", marginBottom: 15}
});
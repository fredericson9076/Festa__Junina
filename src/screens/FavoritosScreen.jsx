import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import comidas from '../data/comidas';

export default function FavoritosScreen({ navigation, route }) {
  const { favoritos } = route.params;
  const comidasFavoritas = comidas.filter((item) => favoritos.includes(item.nome));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltarButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Meus Favoritos</Text>

      {comidasFavoritas.length === 0 ? (
        <Text style={styles.vazio}>Nenhum item favorito selecionado.</Text>
      ) : (
        <FlatList
          data={comidasFavoritas}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.imagem} style={styles.imagem} />
              <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>R$ {item.preco.toFixed(2)}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  voltarButton: {
    backgroundColor: '#ff6600',
    padding: 10,
    marginBottom: 10,
    marginTop: 30,
    borderRadius: 5,
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  vazio: { fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginTop: 20 },
  card: {
    backgroundColor: '#fff0e1',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  imagem: { width: '100%', height: 150 },
  info: { padding: 10 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  preco: { fontSize: 16, color: '#555' },
});

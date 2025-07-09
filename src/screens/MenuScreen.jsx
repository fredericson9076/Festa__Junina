import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import comidas from '../data/comidas';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function MenuScreen({ navigation }) {
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (item) => {
    setFavoritos((prev) =>
      prev.includes(item.nome)
        ? prev.filter((f) => f !== item.nome)
        : [...prev, item.nome]
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detalhes', { item })}
      style={[styles.card, favoritos.includes(item.nome) && styles.favorito]}
    >
      <View>
        <Image source={item.imagem} style={styles.img} />
        <TouchableOpacity
          style={styles.iconeFavorito}
          onPress={() => toggleFavorito(item)}
        >
          <AntDesign
            name={favoritos.includes(item.nome) ? 'heart' : 'hearto'}
            size={24}
            color="red"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.nome}>
        {item.nome} – R${item.preco}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.voltarButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
      </View>


      <ImageBackground
        source={require('../../assets/bandeirinha.png') } 
        style={styles.fundoTitulo}
        resizeMode="cover"
      >
        <Text style={styles.titulo}>
          Cardápio da Festa Julina do IFC-Campus Videira
        </Text>
      </ImageBackground>

      <Text style={styles.texto}>Clique nas imagens para mais informações!</Text>

      <FlatList
        data={comidas}
        keyExtractor={(item) => item.nome}
        renderItem={renderItem}
      />

      <TouchableOpacity
        style={styles.botaoFavoritos}
        onPress={() => navigation.navigate('Favoritos', { favoritos })}
      >
        <Text style={styles.textoBotao}>Ver Favoritos ❤️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e7f7de',
  },
  header: {
    marginTop: 30,
    marginBottom: 10,
  },
  voltarButton: {
    backgroundColor: '#ff6600',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 50,
    height: 50,
    justifyContent: 'center',
  },
  fundoTitulo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    padding: 8,
    borderRadius: 8,
  },
  texto: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#ffff9e',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    position: 'relative',
  },
  favorito: { backgroundColor: '#ffe0b2' },
  img: { height: 250, width: '100%', borderRadius: 10 },
  nome: { fontSize: 18, marginTop: 5 },
  iconeFavorito: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    elevation: 3,
  },
  botaoFavoritos: {
    backgroundColor: '#f28500',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function MovieScreen({ route }) {
  const { character } = route.params;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await Promise.all(character.films.map(url => axios.get(url).then(res => res.data)));
      setMovies(movieData);
    };
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>Título: {item.title}</Text>
            <Text style={styles.text}>Diretor: {item.director}</Text>
            <Text style={styles.text}>Ano: {item.release_date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    backgroundColor: '#333',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'StarWarsFont',
  },
});

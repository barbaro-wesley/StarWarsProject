import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function StarshipScreen({ route }) {
  const { character } = route.params;
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const shipData = await Promise.all(character.starships.map(url => axios.get(url).then(res => res.data)));
      setStarships(shipData);
    };
    fetchStarships();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={starships}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>Nome: {item.name}</Text>
            <Text style={styles.text}>Modelo: {item.model}</Text>
            <Text style={styles.text}>Passageiros: {item.passengers}</Text>
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

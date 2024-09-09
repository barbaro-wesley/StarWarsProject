import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CharacterDetailScreen({ route, navigation }) {
  const { character } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'INFO CHARACTER',
      headerTitleAlign: 'center', 
      headerStyle: {
        backgroundColor: '#f5f5f5', 
      },
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.characterName}>{character.name.toUpperCase()}</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Altura {character.height}cm</Text>
        <Text style={styles.infoText}>{character.mass}kg</Text>
        <Text style={styles.infoText}>{character.hair_color}</Text>
        <Text style={styles.infoText}>{character.skin_color}</Text>
        <Text style={styles.infoText}>{character.eye_color}</Text>
        <Text style={styles.infoText}>{character.gender}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Starships', { character })}
      >
        <Text style={styles.buttonText}>Ships</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Movies', { character })}
      >
        <Text style={styles.buttonText}>Movies</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 40,
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: 150,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ABOUT</Text>

      <View style={styles.card}>
        <Image 
          source={require('./fotoWesley.png')} 
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nome: Wesley Barbaro</Text>
          <Text style={styles.infoText}>RA: 1134832</Text>
          <Text style={styles.infoText}>Email: 1134832@atitus.edu.br</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image 
          source={require('./fotoWendel.jpeg')} 
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Nome: Wendel Barbaro</Text>
          <Text style={styles.infoText}>RA: 1134430</Text>
          <Text style={styles.infoText}>Email: 1134430@atitus.edu.br</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '90%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});

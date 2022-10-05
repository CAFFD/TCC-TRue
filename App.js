import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (




    <View style={styles.container}>
      <Text style={styles.paragraph}>
     Seja bem-vinda ao True!
         Responda este questionário para maior precisão:
      </Text>
      <Card style= {styles.card}>
        <AssetExample />
      </Card>
    </View>
 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card:{
    backgroundColor: '#f8dfff',
    borderRadius: 5,
    padding: 15,
  }
});



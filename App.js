import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculadora = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calcularResultado = () => {
    try {
      const resultado = eval(input);
      setResultado(resultado.toString());
    } catch (error) {
      setResultado('Error');
    }
  };

  const borrarTodo = () => {
    setInput('');
    setResultado('');
  };

  const buttons = [
    'C', '(', ')', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '='
  ];

  const lightGrayButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.'];

  const lightRedButtons = ['C'];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.displayContainer}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultadoText}>{resultado}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => {
              if (value === '=') {
                calcularResultado();
              } else if (value === 'C') {
                borrarTodo();
              } else {
                handlePress(value);
              }
            }}
            style={[
              styles.button,
              lightGrayButtons.includes(value) && styles.lightGrayButton,
              lightRedButtons.includes(value) && styles.lightRedButtons,
            ]}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  displayContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  inputText: {
    fontSize: 24,
    color: '#333',
  },
  resultadoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '22%',
    aspectRatio: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  lightGrayButton: {
    backgroundColor: '#d3d3d3',
  },
  lightRedButtons: {
    backgroundColor: '#ff0000'
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Calculadora;

import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculadora = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const sumar = () => {
    const resultado = parseFloat(numero1) + parseFloat(numero2);
    setResultado(resultado.toString());
  };

  const restar = () => {
    const resultado = parseFloat(numero1) - parseFloat(numero2);
    setResultado(resultado.toString());
  };

  const multiplicar = () => {
    const resultado = parseFloat(numero1) * parseFloat(numero2);
    setResultado(resultado.toString());
  };

  const dividir = () => {
    if (numero2 !== '0') {
      const resultado = parseFloat(numero1) / parseFloat(numero2);
      setResultado(resultado.toString());
    } else {
      setResultado('Error: No se puede dividir por cero');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={numero1}
          onChangeText={setNumero1}
          placeholder="Número 1"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          value={numero2}
          onChangeText={setNumero2}
          placeholder="Número 2"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={sumar} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={restar} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={multiplicar} style={styles.button}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={dividir} style={styles.button}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: '45%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: '22%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Calculadora;

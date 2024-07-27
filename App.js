import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button, TextInput } from 'react-native-paper';

const Calculadora = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value) => {
    if (value === 'x') value = '*';
    if (value === '÷') value = '/';
    setInput(input + value);
  };

  const calcularResultado = () => {
    try {
      if (input.includes('/0')) {
        setResultado('Syntax Error');
      } else {
        const resultado = eval(input);
        setResultado(resultado.toString());
      }
    } catch (e) {
      setResultado('Syntax Error');
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

  const XtraFontSize = ['C', '(', ')', '÷', 'x', '-', '+', '='];
  const lightGrayButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.'];
  const lightRedButtons = ['C'];

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Calculadora</Text>
        <View style={styles.displayContainer}>
          <TextInput
            mode='outlined'
            value={input}
            style={styles.displayContainer}
            editable={false}
          />
          <Text style={styles.resultadoText}>{resultado}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {buttons.map((value) => (
            <Button
              key={value}
              mode='contained-tonal'
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
                lightRedButtons.includes(value) && styles.lightRedButton,
              ]}
              labelStyle={[
                styles.buttonText,
                lightGrayButtons.includes(value) && styles.lightGrayButtonText,
                XtraFontSize.includes(value) && styles.XtraFontSize,
              ]}
            >
              {value}
            </Button>
          ))}
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  displayContainer: {
    backgroundColor: '#fff',
    fontSize: 24,
    fontWeight: 'regular',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 24,
  },
  resultadoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    flexBasis: '22%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  lightGrayButton: {
    backgroundColor: '#d1d1d1',
  },
  lightRedButton: {
    backgroundColor: '#ff0000',
  },
  lightGrayButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'regular',
  },
  XtraFontSize: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
});

export default Calculadora;

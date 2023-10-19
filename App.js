import { StyleSheet, Text, View } from 'react-native';
import InputComponent from './src/InputComponent';
import { useState } from 'react';
import { Button } from 'react-native-elements';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [peso1, setPeso1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [peso2, setPeso2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const n1 = parseFloat(numero1);
    const p1 = parseFloat(peso1);
    const n2 = parseFloat(numero2);
    const p2 = parseFloat(peso2);

    if (!isNaN(n1) && !isNaN(p1) && !isNaN(n2) && !isNaN(p2)) {
      const mediaPonderada = (n1 * p1 + n2 * p2) / (p1 + p2);

      setResultado(mediaPonderada.toFixed(2));
    } else {
      setResultado('Valores inválidos');
    }
  }

  const handleNumero1Change = (text) => {
    setNumero1(text);
  };

  const handlePeso1Change = (text) => {
    setPeso1(text);
  };

  const handleNumero2Change = (text) => {
    setNumero2(text);
  };

  const handlePeso2Change = (text) => {
    setPeso2(text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de média ponderada</Text>
      <View style={styles.wrapperBoxFields}>
        <View style={styles.boxFields}>
          <View style={styles.field}>
            <Text style={styles.label}>Número 1</Text>
            <InputComponent value={numero1} onChangeText={handleNumero1Change} flexPlaceholder={"Número 1"}  />
          </View>        
          <View style={styles.field}>
            <Text style={styles.label}>Peso do número 1</Text>
            <InputComponent value={peso1} onChangeText={handlePeso1Change} flexPlaceholder={"Peso 1"}  />
          </View>
        </View>
        <View style={styles.horizontalLine} />
        <View style={styles.boxFields}>
          <View style={styles.field}>
            <Text style={styles.label}>Número 2</Text>
            <InputComponent value={numero2} onChangeText={handleNumero2Change} flexPlaceholder={"Número 2"}  />
          </View>        
          <View style={styles.field}>
            <Text style={styles.label}>Peso do número 2</Text>
            <InputComponent value={peso2} onChangeText={handlePeso2Change} flexPlaceholder={"Peso 2"}  />
          </View>
        </View>

      </View>
      
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}

      <Button
        title="Calcular"
        onPress={calcular}
        color="#007BFF" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(209, 237, 249)',
    alignItems: 'center',
    paddingTop: 40
  },
  wrapperBoxFields:{
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    width: '90%',
  }
  ,
  boxFields: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    gap: 10,
  },
  field:{
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  label:{
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 14
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'rgb(102, 110, 165)',
    textAlign: 'center',
    width: '90%',
    marginBottom: 10
  },
  resultado: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  title:{
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  }
});

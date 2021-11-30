import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Text,TextInput, Button} from 'react-native';
import Css from './estilos/estilos'

export default function() {
 
  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState ('0')
  
  const calc = () => {
      let nConta = parseFloat (conta); //
      if (nConta) {

        setGorjeta(10/100 * nConta )

      } else {
        alert ('Digite o valor da conta')
      }
  }
 
  return (
<SafeAreaView style={{ flex:1,
                      alignItems:'center' }}>

                              <Text
                              style ={{
                                fontSize: 25,
                                color: '#000'
                              }}
                              > Calculadora de gorjeta </Text>

                              <TextInput style ={ Css.areaInput}
                              placeholder = "Quanto deu a conta?"
                              placeholderTextColor ='#000'
                              keyboardType ='numeric'
                              value ={conta}
                              onChangeText = {n=>setConta (n)}
                              />

                              <Button style= {{marginTop: 10}}
                              title ='Calcular' onPress ={calc}/>

                              { gorjeta > 0 && // se gorjeta for maior que zero a Area é exibida
                              //Tofixed limita as casas decimais
                              <View style = {Css.resultArea}>
                                <Text style = {Css.resultItemTitle} > Valor da Conta </Text>
                                <Text style = {Css.resultItem}> R$ {parseFloat(conta).toFixed(2)}</Text> 
                  
                                <Text style = {Css.resultItemTitle}> Valor da Gorjeta </Text>
                                <Text style = {Css.resultItem}> R$ {gorjeta.toFixed(2)} (10%)</Text>

                                <Text style = {Css.resultItemTitle}> Valor Total </Text>
                                <Text style = {Css.resultItem}> R$ {(parseFloat (conta) + gorjeta). toFixed(2)} </Text>

                              </View>
                              }



</SafeAreaView>
  );


}

//
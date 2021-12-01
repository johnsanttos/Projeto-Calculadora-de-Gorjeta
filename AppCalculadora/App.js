import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet, Text,TextInput, Button} from 'react-native';
import Css from './estilos/estilos'

export default function() {
 
  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState ('0');
  const [pct,setPct] = useState(10)
  
  const calc = () => {
      let nConta = parseFloat (conta); //
      if (nConta) {

        setGorjeta(pct/100 * nConta ) // pct é a porcentagem escolhida pelo usuario

      } else {
        alert ('Digite o valor da conta')
      }
  }
 
useEffect (()=>{
calc();
}, [pct]) // para acompanhar estado do componente, executar entre arrays

  return (
<SafeAreaView style={{ flex:1,
                      backgroundColor: '#000',
                      alignItems:'center' }}>

                              <Text
                              style ={{
                                fontSize: 25,
                                color: '#fff'
                              }}
                              > Calculadora de gorjeta </Text>

                              <TextInput style ={ Css.areaInput}
                              placeholder = "Quanto deu a conta?"
                              placeholderTextColor ='#000'
                              keyboardType ='numeric'
                              value ={conta}
                              onChangeText = {n=>setConta (n)}
                              />
                              
                              <View style = {Css.pctArea}> 
                                <Button 
                                title= '5%' onPress ={()=>setPct(5)}/>
                                <Button style = {Css.pctItem}
                                title= '10%'onPress ={()=>setPct(10)} />
                                <Button style = {Css.pctItem}
                                 title= '15%' onPress ={()=>setPct(15)}/>
                                <Button style = {Css.pctItem}
                                title= '20%' onPress ={()=>setPct(20)} />
                              </View> 


                              <Button style= {{marginTop: 10}}
                              title ={`Calcular ${pct}%`} onPress ={calc}/>

                              { gorjeta > 0 && // se gorjeta for maior que zero a Area é exibida
                              //Tofixed limita as casas decimais
                              <View style = {Css.resultArea}>
                                <Text style = {Css.resultItemTitle} > Valor da Conta </Text>
                                <Text style = {Css.resultItem}> R$ {parseFloat(conta).toFixed(2)}</Text> 
                  
                                <Text style = {Css.resultItemTitle}> Valor da Gorjeta </Text>
                                <Text style = {Css.resultItem}> R$ {gorjeta.toFixed(2)} ({pct}%)</Text>

                                <Text style = {Css.resultItemTitle}> Valor Total </Text>
                                <Text style = {Css.resultItem}> R$ {(parseFloat (conta) + gorjeta). toFixed(2)} </Text>

                              </View>
                              }



</SafeAreaView>
  );


}

//
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { container, title, diarios, titleDiario, txDiario, botaoDeletar, addBotao, txInput, background, altBotao, input, btnEnviar, btnTxEnviar, titulo, btnAlterar } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Editar({navigation, route}){
    return(
        <View style={styles.container}>
           <View>
               <Text style={styles.titulo}>
                   Alterar dados do diário
               </Text>
           </View>

           <View>
               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite o titulo' 
               onChangeText={setTitulo} value={titulo}/>

               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite o seu lindo dia' 
               onChangeText={setTexto} value={texto}/>

               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a data atual' 
               onChangeText={setData} value={data}/>

               
               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite o se local atual' 
               onChangeText={setLocal} value={local}/>


               <TouchableOpacity style={styles.btnAlterar} onPress={()=> {
                   alterarDiario(id, titulo, texto, data, local);
               }}>
                   <Text style={styles.btnTxEnviar}> Alterar </Text>
               </TouchableOpacity>

           </View>
       </View>
   );
}
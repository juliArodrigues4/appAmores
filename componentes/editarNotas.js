import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { container, title, diarios, titleDiario, txDiario, botaoDeletar, addBotao, txInput, background, altBotao, input, btnEnviar, btnTxEnviar, titulo, btnAlterar } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Editar({navigation, route}){
    return(
        <View style={styles.container}>
           <View>
               <Text style={styles.titulo}>
                   Alterar dados do agendamento de namoradas
               </Text>
           </View>

           <View>
               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite o nome da consagrada' 
               onChangeText={setTitulo} value={titulo}/>

               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a descrição' 
               onChangeText={setTexto} value={texto}/>

               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a data de aniversário dela' 
               onChangeText={setData} value={data}/>

               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite a data do encontro' 
               onChangeText={setData} value={data}/>

               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite o local do encontro' 
               onChangeText={setLocal} value={local}/>

               <TextInput autoCapitalize='words' style={styles.input} placeholder='Digite coisas que ela gosta' 
               onChangeText={setLike} value={like}/>

               <TouchableOpacity style={styles.btnAlterar} onPress={()=> {
                   alterarDiario(id, titulo, texto, data, local, like);
               }}>
                   <Text style={styles.btnTxEnviar}> Alterar </Text>
               </TouchableOpacity>

           </View>
       </View>
   );
}
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { container, title, diarios, titleDiario, txDiario, botaoDeletar, addBotao, txInput, background, altBotao, input, btnEnviar, btnTxEnviar, titulo, btnAlterar } from './styles';

export default function Home({navigation}){
    return( 
    
    <View style={styles.container}>
          <Text style={styles.title}> MAAA  </Text>
     
    
          <FlatList
          data={diario}
          renderItem={({item})=>{
            return(
    
              <View style={styles.diarios}>
                <TouchableOpacity  onPress={() => navigation.navigate("alterarDiario", {
                  id: item.id,
                  titulo: item.titulo,
                  texto: item.texto,
                  data: item.data,
                  local: item.local
                })}>
    
                  <View style={styles.txInput}>
                    <Text style={styles.titleDiario}> Titulo:  
                      <Text style={styles.txDiario}> {item.titulo} </Text> 
                    </Text>
    
                    <Text style={styles.titleDiario}> Texto: 
                      <Text style={styles.txDiario}> {item.texto} </Text>
                    </Text>
    
                    <Text style={styles.titleDiario}> Data: 
                      <Text style={styles.txDiario}> {item.data} </Text>
                    </Text>
    
                    <Text style={styles.titleDiario}> Local: 
                      <Text style={styles.txDiario}> {item.local} </Text>
                    </Text>
    
                  </View>
                </TouchableOpacity>
    
                <View style={styles.botaoDeletar}>
                  <TouchableOpacity onPress={() => {deleteDiario(item.id)}}>
                      <MaterialCommunityIcons name="delete-empty" size={70} color="#B03060" />
                  </TouchableOpacity>
                </View>
    
                </View>
    
                );
              }}
              />
    
              <TouchableOpacity  style={styles.addBotao} onPress={() => navigation.navigate("CadastrarDiario")}>
                  <MaterialCommunityIcons name="plus" size={60} color="#B03060" />
              </TouchableOpacity>
    
              <TouchableOpacity  style={styles.altBotao} onPress={() => navigation.navigate("AlterarDiario")}
              disabled={true}>
                  <MaterialCommunityIcons name="pencil" size={50} color="#B03060" resizeMode="contain" />
              </TouchableOpacity>
    
    
        </View>
     
        );
    
    }
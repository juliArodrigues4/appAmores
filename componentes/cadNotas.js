import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { container, title, diarios, titleDiario, txDiario, botaoDeletar, addBotao, txInput, background, altBotao, input, btnEnviar, btnTxEnviar, titulo, btnAlterar } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Cadastrar(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    Escreva em seu diário
                </Text>

                <TextInput autoCapitalize='words' style={styles.input}
                placeholder='Digite o título' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setTitulo} value={titulo} />

                <TextInput autoCapitalize='words' style={styles.input}
                placeholder='Digite o texto' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setTexto} value={texto} />

                <TextInput autoCapitalize='words' style={styles.input}
                placeholder='Digite a data' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setData} value={data} />

                <TextInput autoCapitalize='words' style={styles.input} 
                placeholder='Digite o seu local' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setLocal} value={local}/>

                <TouchableOpacity style={styles.btnEnviar} onPress={()=> {
                    confirmar();
                }}>
                    <Text style={styles.btnTxEnviar}> Enviar </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
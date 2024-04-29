import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import Firebase from '../firebase';

export default function Cadastrar({navigation}){

    const [ titulo, setTitulo ] = useState('')
    const [ texto,  setTexto ] = useState('')
    const [ aniversario, setAniversario ] = useState('')
    const [ data,   setData ] = useState('')
    const [ local,  setLocal ] = useState('')
    const [ like, setLike ] = useState('')

    function addNota() {
        Firebase.collection('notas').add({
            titulo: titulo,
            texto: texto,
            aniversario: aniversario,
            data: data,
            local: local,
            like: like
    
        });
        setTitulo({titulo: ''})
        setTexto({texto: ''})
        setData({data: ''})
        setLocal({local: ''})
        Alert.alert("Nova nota", "Nova nota adicionada com sucesso");
        navigation.navigate("Home");
    }
    
    
      const confirmar = () => {
    
        if(titulo === "" || texto === "" || aniversario === "" | data === "" || local === ""){
          Alert.alert("Erro", "Preencha todos os campos!");
        }
        else {
          addNota();
        }
    
      }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>
                    Escreva em sua agenda de namoradas
                </Text>

                <TextInput autoCapitalize='words' style={styles.input}
                placeholder='Digite o nome da consagrada' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setTitulo} value={titulo} />

                <TextInput autoCapitalize='words' style={styles.input}
                placeholder='Digite a descrição' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setTexto} value={texto} />

                <TextInput autoCapitalize='words' style={styles.input}
                placeholder='Digite a data de aniversário dela' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setAniversario} value={aniversario} />

                <TextInput autoCapitalize='words' style={styles.input}
                placeholder='Digite a data do encontro' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setData} value={data} />

                <TextInput autoCapitalize='words' style={styles.input} 
                placeholder='Digite o local do encontro' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setLocal} value={local}/>

                <TextInput autoCapitalize='words' style={styles.input} 
                placeholder='Digite coisas que ela goste' 
                placeholderTextColor={'#2F4F4F'}
                onChangeText={setLike} value={like}/>

                <TouchableOpacity style={styles.btnEnviar} onPress={()=> {
                    confirmar();
                }}>
                    <Text style={styles.btnTxEnviar}> Enviar </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      title:{
        marginTop: 50,
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2F4F4F',
      },
      diarios:{
       flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#4682B4',
        borderRadius:10
      },
      titleDiario:{
        fontSize: 16,
        color:'#fff',
        fontWeight: "bold",
        marginBottom: 5,
      },
      txDiario:{
        fontSize: 15,
        color: '#fff'
      },
      botaoDeletar:{
        textAlignVertical: 'center',
        marginVertical: 10,
      },
      addBotao:{
        backgroundColor: '#ffffff',
        borderRadius: 50,
        position: 'absolute',
        left: 20,
        bottom: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70
      },
      txInput:{
        width: 300,
        height: 150,
        justifyContent: 'space-evenly',
        alignItems: 'left'
      },
      background:{
        width: '100%',
        height: '100%',
      },
      altBotao:{
        backgroundColor: '#ffffff',
        borderRadius: 50,
        position: 'absolute',
        right: 20,
        bottom: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70
      },
      input:{
        marginVertical: 25,
        marginHorizontal: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 3,
        borderColor: '#2F4F4F',
        paddingHorizontal: 28,
        paddingVertical: 20,
        fontSize: 18,
        borderRadius: 10,
    },
    btnEnviar:{
        marginTop: 40,
        marginHorizontal: 130,
        justifySelf: 'center',
        alignself: 'center',
        width: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderWidth: 3,
        borderColor: '#2F4F4F',
        borderRadius: 40,
        padding: 5,
    },
    btnTxEnviar:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#2F4F4F'
    },
    titulo:{
        marginVertical: 55,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#2F4F4F'
    },
    btnAlterar:{
        bottom: 0,
        width: 80,
        height: 80,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
      },
});
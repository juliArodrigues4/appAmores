import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { firestore } from "../firebase"; 
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"; 


export default function Home({navigation}){

  const [ notas, setNotas ] = useState([]);

  async function deleteNota(id){
    try{
      await deleteDoc(doc(firestore, "notas", id)); 
      Alert.alert("A nota foi deletada.");
    } catch (error) {
    console.error("A nota foi deletada.", error);
  }
  }

  useEffect(()=>{
    const unsubscribe = onSnapshot(collection(firestore, 'notas'), (querySnapshot) => {
      const lista = [];
      querySnapshot.forEach((doc) => {
        lista.push({...doc.data(), id: doc.id});
      });
      setNotas(lista);
    });
  }, []);


    return( 
    
    <View style={styles.container}>
          <Text style={styles.title}> Agendamento de namoradas  </Text>
     
    
          <FlatList
          data={notas}
          renderItem={({item})=>{
            return(
    
              <View style={styles.diarios}>
                <TouchableOpacity  onPress={() => navigation.navigate("alterarNota", {
                  id: item.id,
                  titulo: item.titulo,
                  texto: item.texto,
                  aniversario: item.aniversario,
                  data: item.data,
                  local: item.local,
                  like: item.like
                })}>
    
                  <View style={styles.txInput}>
                    <Text style={styles.titleDiario}> Nome da consagrada:  
                      <Text style={styles.txDiario}> {item.titulo} </Text> 
                    </Text>

                    <Text style={styles.titleDiario}> Descrição:  
                      <Text style={styles.txDiario}> {item.texto} </Text> 
                    </Text>
    
                    <Text style={styles.titleDiario}> Aniversário dela: 
                      <Text style={styles.txDiario}> {item.aniversario} </Text>
                    </Text>
    
                    <Text style={styles.titleDiario}> Data do encontro: 
                      <Text style={styles.txDiario}> {item.data} </Text>
                    </Text>
    
                    <Text style={styles.titleDiario}> Local do encontro: 
                      <Text style={styles.txDiario}> {item.local} </Text>
                    </Text>

                    <Text style={styles.titleDiario}> Coisas que ela gosta: 
                      <Text style={styles.txDiario} multiline={true} numberOfLines={20}> {item.like} </Text>
                    </Text>
            
                  </View>
                </TouchableOpacity>
    
                <View style={styles.botaoDeletar}>
                  <TouchableOpacity onPress={() => {deleteNota(item.id)}}>
                      <MaterialCommunityIcons name="delete-empty" size={70} color="#B03060" />
                  </TouchableOpacity>
                </View>
    
                </View>
    
                );
              }}
              />
    
              <TouchableOpacity  style={styles.addBotao} onPress={() => navigation.navigate("Cadastrar")}>
                  <MaterialCommunityIcons name="plus" size={60} color="#B03060" />
              </TouchableOpacity>
    
              <TouchableOpacity  style={styles.altBotao} onPress={() => navigation.navigate("Editar")}>
                  <MaterialCommunityIcons name="pencil" size={50} color="#B03060" resizeMode="contain" />
              </TouchableOpacity>
    
    
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
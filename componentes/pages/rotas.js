import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './index';
import Editar from './editarNotas';
import Cadastrar from './cadNotas';

const Stack = createStackNavigator();

export default function RotasMain() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
            <Stack.Screen name="Cadastrar"        component={Cadastrar}  options={{headerTintColor: '#9ac234', title: 'Cadastro do dia'}}    />
            <Stack.Screen name="Editar"           component={Editar}     options={{headerTintColor: '#9ac234', title: 'Alterar registros'}} screenOptions={{headerShown: true}}  />
            <Stack.Screen name="Home"             component={Home}       options={{headerTintColor: '#9ac234'}}/>
        </Stack.Navigator>
    );
}
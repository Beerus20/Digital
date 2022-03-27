//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text , TouchableOpacity} from 'react-native';
import { McText, McImage ,  } from 'Components'
import { Card, Title, Paragraph } from 'react-native-paper';

import styled, { useTheme } from 'styled-components/native'
// create a component
const Forfait = ({ donne, nav, next }) => {
    return (
        <Card style={{
            width: 257, height: 420, alignContent: 'center', backgroundColor: "#F5EDEB", justifyContent: "center",
            alignItems: 'center', borderRadius: 15, paddingLeft: 15, marginLeft: 20, marginRight: 20
        }}>
            <Card.Content>

                <McImage source={donne.image} style={{ width: 102, height: 200, marginLeft: 50 }} />
                <Title style={{ marginLeft: 40, fontSize: 20 }}>{donne.nom}</Title>
                <Paragraph style={{ marginRight: 15, fontSize: 13 }}>{donne.description}</Paragraph>
                <Title style={{ marginLeft: 75, fontSize: 20, color: 'blue' }}>{donne.prix} €</Title>
                
                <TouchableOpacity 
                onPress={()=>{
                    nav.push("Achat", {donne : donne})
                }}
                >
                <View  style={{
                    width: 225, height: 40, backgroundColor: '#F0A08C', borderRadius: 15, alignItems: 'center',
                    justifyContent: 'center', marginRight: 15
                }}>
                    <Title style={{ fontSize: 16, color: '#FFF' }}>Ajouter au Panier</Title>
                </View>
                </TouchableOpacity>

            </Card.Content>
        </Card>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        shadowColor: '#171717',
        borderRadius: 10,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Forfait;

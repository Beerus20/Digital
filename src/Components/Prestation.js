//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { McText, McImage } from 'Components'
import { Card, Title, Paragraph } from 'react-native-paper';

import styled, { useTheme } from 'styled-components/native'
// create a component
const Prestation = ({ donne, nav, next }) => {
    return (
        <Card style={{
            width: 300, height: 380, alignContent: 'center', backgroundColor: "#F5EDEB", justifyContent: "center",
            alignItems: 'center', borderRadius: 15, paddingLeft: 15, marginLeft: 20, marginRight: 20, marginBottom : 20
        }}>
            <Card.Content>

                <McImage source={donne.image} style={{ width: 275, height: 200, borderRadius : 10, marginRight : 15 }} />

                <Title style={{ fontSize: 15, alignContent :'center', justifyContent : 'center'  }}>{donne.nom}</Title>
            
                <Title style={{ marginLeft: 97, fontSize: 15, color: 'blue' }}>{donne.prix} €</Title>
                <View style={{
                    width: 225, height: 40, backgroundColor: '#F0A08C', borderRadius: 15, alignItems: 'center',
                    justifyContent: 'center', marginLeft : 25
                }}>
                    <Title style={{ fontSize: 16, color: '#FFF' }}>Ajouter au Panier</Title>
                </View>

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
export default Prestation;

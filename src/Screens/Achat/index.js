import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import { Ionicons, AntDesign } from "@expo/vector-icons";


const { width } = Dimensions.get("screen")
const cardWitdh = width / 1.8
const w = width;

const Achat = ({ animatedStyle, navigation, route }) => {
    const [donne, setDonne] = useState([]);
    const theme = useTheme()
    const [prix, setPrix] = useState(null)
    const [compte, setCompte] = useState(1)
    useEffect(() => {
        let { donne } = route.params;
        setDonne(donne);
        setPrix(parseFloat(donne.prix))
    }, []);

    return (
        <Animated.View
            style={{
                flex: 1,

                backgroundColor: theme.colors.background,
                paddingTop: 44,
                ...animatedStyle
            }}
        >

            {/* Header Section  */}
            <HeadearSection>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 0 }}>
                    <View style={{ flexDirection: "column" }}>
                        <McImage source={Images.logo} style={{ marginBottom: 0 }} />
                        <McText secondary size={17} color={theme.colors.text1} style={{ marginTop: 0 }}>DigitalOfficeTradLTD</McText>
                    </View>
                </View>

                <McImage source={Images.union} style={{ width: 19, height: 19, tintColor: theme.colors.text2 }} />

            </HeadearSection>

            {/* Account OverView  */}
            <ScrollView>

                <HeadearSection style={{ marginTop: 50 }}>
                    <McText semi size={16} color={theme.colors.text2}>{donne.nom}</McText>
                </HeadearSection>

                <HeadearSection style={{ marginTop: 2 }}>
                    <McText semi size={13} color={theme.colors.text3}>{donne.description}</McText>
                </HeadearSection>

                <HeadearSection style={{ marginTop: 4 }}>
                <McImage source={donne.image} style={{ width: 102, height: 200, marginLeft: 100 }} />
                </HeadearSection>

                <View style={{ marginTop: 10, alignItems: 'center', marginBottom: 3 }}>
                    <McText semi size={19} color={theme.colors.text2}>{prix} Є</McText>
                </View>

                <View style={{ width: 200, flexDirection: 'row', marginLeft: 75, marginTop: 3, borderColor: "#20232a", borderWidth: 1 }}>
                    <TouchableOpacity
                        onPress={() => {
                            let a = compte - 1
                            let initial = parseFloat(donne.prix)
                            if (a < 1) {
                                setCompte(1)
                                setPrix(prix)
                            } else {
                                setCompte(a)
                                setPrix(prix - initial)
                            }

                        }}
                    >
                        <View style={{ width: 65, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                            <AntDesign name="minus" size={55} color="#52575D"></AntDesign>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: 70, height: 45, alignItems: 'center', justifyContent: 'center' }}>
                        <McText semi size={25} color={theme.colors.text2}>{compte}</McText>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            let a = compte + 1
                            let initial = parseFloat(donne.prix)
                            
                            setCompte(a)
                            setPrix(initial *a)
                        }}
                    >
                        <View style={{ width: 65, height: 45, }}>
                            <Ionicons name="add" size={45} color="#52575D"></Ionicons>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* liste des Pack  */}
                <TouchableOpacity
                    onPress={() => {
                        console.log(prix)
                    }}
                >
                    <View style={styles.btn}>
                        <McText semi size={21} color={theme.colors.text2}>Valide la commande</McText>
                    </View>

                </TouchableOpacity>





                {/* ................................ */}





            </ScrollView >
        </Animated.View >
    );
};

const HeadearSection = styled.View`
    margin: 0px 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    `

const styles = StyleSheet.create({
    PetitCard: {
        marginTop: 14,
        top: 0,


    },
    btn: {
        backgroundColor: "#F6B125",
        width: 300,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        borderRadius: 14,
        marginLeft: 30,
        flexDirection: 'row'
    }
})

export default Achat;

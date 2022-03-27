import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'

import { dummyData } from 'Mock'
const Home = ({ animatedStyle, navigation, route }) => {
  
    const [loading, setLoading] = useState(true)
    const [donne, setDonne] = useState([])
    const [data , setData] = useState([])

    useEffect(() => {
        

        setTimeout(() => {
            setLoading(false)
        }, 1500)

    }, []);

    useEffect(() => {
        // let { data } = route.params;
        setData(data);
       

    }, []);


   





    const theme = useTheme()

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Images.logoBavata}
                    style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginLeft: 85 }}
                />
                <Text
                    style={{
                        fontSize: 30,

                        alignSelf: "center",
                    }}
                >DigitalOffficeTradTLD</Text>

                <Text
                    style={{


                        marginHorizontal: 55,
                        textAlign: 'center',
                        marginTop: 5,
                        opacity: 0.4
                    }}
                >
                    création de votre société au Royaume-Uni
                </Text>
                <ActivityIndicator size={65} color="blue" />
            </View>
        )
    }
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

            <HeadearSection style={{ marginTop: 50 }}>
                <McText semi size={16} color={theme.colors.text2}>Account OverView</McText>
            </HeadearSection>

            <View
                style={{
                    marginHorizontal: 25,
                    marginTop: 20,
                    height: 116,
                    backgroundColor: theme.colors.boxBackground,
                    borderRadius: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <View style={{ marginLeft: 25 }}>
                    <McText semi size={24} color={theme.colors.text1} style={{ lineHeight: 30, marginBottom: 8 }}>Societe Test</McText>
                    <McText semi size={16} color={theme.colors.text3}>Total Panier  : 6,293.00 €</McText>
                </View>


                <TouchableOpacity

                    onPress={() => {
                        console.log(route)
                    }}
                    style={{
                        marginRight: 25
                        , width: 48, height: 48, borderRadius: 24, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center'
                    }}>
                    <McImage source={Images.plus} style={{ width: 19, height: 19, tintColor: theme.colors.text2 }} />
                </TouchableOpacity>
            </View>

            {/* Send Money  */}
            <HeadearSection style={{ marginTop: 40 }}>
                <McText semi size={16} color={theme.colors.text2}>Votre Forfaits</McText>
                <McImage source={Images.scan} style={{ width: 24, height: 24, tintColor: theme.colors.text2 }} />
            </HeadearSection>

            <View>
                <FlatList
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dummyData.SendMoneyRecords}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                marginTop: 20, marginLeft: index === 0 ? 25 : 0, marginRight: index === dummyData.SendMoneyRecords - 1 ? 0 : 10
                            }}>
                                {index === 0 ? (
                                    <View style={{
                                        width: 52, height: 120, justifyContent: 'center',
                                        alignItems: 'center', marginTop: 25
                                    }}>
                                        <TouchableOpacity style={{
                                            width: 52, height: 52, borderRadius: 26, backgroundColor: theme.colors.primary,
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <McImage source={item.img} />
                                        </TouchableOpacity>

                                    </View>

                                ) : (

                                    <McImage style={{
                                        width: 108, height: 165, justifyContent: 'center',
                                        alignItems: 'center', borderRadius: 12
                                    }} source={item.avatar} />



                                )}

                            </View>
                        )
                    }}

                />

            </View>

            {/* Service */}
            <HeadearSection style={{ marginTop: 40 }}>
                <McText semi size={16} color={theme.colors.text2}>Historique d'Activiter</McText>
                <McImage source={Images.filter} style={{ width: 24, height: 24, tintColor: theme.colors.text2 }} />
            </HeadearSection>






        </Animated.View>
    );
};

const HeadearSection = styled.View`
    margin: 0px 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    `

export default Home;

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import Prestation from '../../Components/Prestation';
import { dummyData } from 'Mock'
import prestation from '../../Constants/Prestation';
const { width } = Dimensions.get("screen")
const cardWitdh = width / 1.8
const w = width;

const Autre_Prestation = ({ animatedStyle }) => {
    const theme = useTheme()
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
                    <McText semi size={16} color={theme.colors.text2}>Autres Prestations</McText>
                </HeadearSection>


                {/* liste des Pack  */}

                <FlatList
                    style={styles.PetitCard}
                    data={prestation}
                    keyExtractor={(item) => item.id}
                   
                    showsHorizontalScrollIndicator={false}

                    contentContainerStyle={{
                        paddingLeft: 20,
                        paddingTop: 0,
                        marginRight: 3,
                        marginTop: 0
                    }}
                    renderItem={({ item }) => (<Prestation donne={item} next="info" />)}

                />







                {/* ................................ */}





            </ScrollView>
        </Animated.View>
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


    }
})

export default Autre_Prestation;

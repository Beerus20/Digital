import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions, ScrollView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Images } from 'Constants'
import Forfait from '../../Components/Forfait';
import { dummyData } from 'Mock'
import forfait from '../../Constants/Forfaits';
const { width } = Dimensions.get("screen")
const cardWitdh = width / 1.8
const w = width;
const Tarifs = ({ animatedStyle, navigation }) => {
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
            <ScrollView>
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
                    <McText semi size={16} color={theme.colors.text2}>Nos Forfaits</McText>
                </HeadearSection>


                {/* liste des Pack  */}

                <FlatList
                    style={styles.PetitCard}
                    data={forfait}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}

                    contentContainerStyle={{
                        paddingLeft: 20,
                        paddingTop: 0,
                        marginRight: 3,
                        marginTop: 0
                    }}
                    renderItem={({ item }) => (<Forfait donne={item} nav={navigation} next="info" />)}

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

export default Tarifs;

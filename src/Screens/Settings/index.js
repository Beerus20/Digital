import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { useThemeContext } from 'Themes'
import { Images } from 'Constants'
import {AntDesign  } from "@expo/vector-icons";

const Setting = ({ animatedStyle }) => {
    const theme = useTheme()
    const themeContext = useThemeContext()
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
                <McText semi size={16} color={theme.colors.text2}>Paramètre</McText>
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
                    <McText semi size={18} color={theme.colors.text1} style={{ lineHeight: 30, marginBottom: 8 }}>Mode</McText>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <McText bold size={16} color={theme.colors.text1}>Light</McText>
                        <Switch
                            value={themeContext.mode === 'dark'}
                            onValueChange={(value) => {
                                themeContext.setMode(value ? 'dark' : 'light')
                            }}
                        >

                        </Switch>
                        <McText bold size={16} color={theme.colors.text1}>Dark</McText>

                    </View>
                </View>




            </View>

            <View style={{ marginLeft: 10, marginRight: 10, backgroundColor: theme.colors.boxBackground, width: 330, height: 2, marginTop: 10 }}></View>

            <TouchableOpacity>
            <View style={{ marginTop: 10, flexDirection: 'row' , marginLeft : 25,  }}>
            <AntDesign name="earth" size={30} color= "#77605B"></AntDesign>
                <McText h4 size={16} color={theme.colors.text2} style={{marginLeft: 10 , marginTop : 4}}>Langue et Région</McText>
            </View>
            </TouchableOpacity>










        </Animated.View>
    );
};

const HeadearSection = styled.View`
    margin: 0px 25px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    `

export default Setting;

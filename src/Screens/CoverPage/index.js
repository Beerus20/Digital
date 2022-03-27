//import liraries
import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useTheme } from 'styled-components/native'
// create a component

import { McText, McImage } from 'Components'
import { Images } from 'Constants'

const imageBarWidth = Dimensions.get('screen').width * 0.3;
const imageBarHeight = Dimensions.get('screen').height;



const CoverPage = ({ navigation }) => {
    const theme = useTheme();

    var now  = new Date(); 
    var  dnme = now.getDay()
    var no = now.getMonth()
    var dnum = now.getDate()
    var yr = now.getFullYear()
    var hou = now.getHours()
    var min = now.getMinutes()
    var sec = now.getSeconds()
    

    return (
        <View style={{
                flex:1,
                height: Dimensions.get('screen').height,
            }}>
            <StatusBar hidden={true} />
            <View style={{ flexDirection: 'row', }}>
                <McImage style={{width:imageBarWidth,height:imageBarHeight}} source={Images.color_bar} />
                <View style={{
                    flex:1,
                    marginTop: 44, marginHorizontal: 26, marginBottom: 53,
                    justifyContent:"space-between"
                }}>
                    <View>
                        <View style={{ flexDirection: "row", }}>
                            <McText medium size={24} color={theme.colors.text1}>{hou}h:{min} </McText>
                            <Image 
                                source={Images.cloud} 
                                style={{ 
                                    resizeMode: 'stretch',
                                    width: Dimensions.get('screen').width * 0.04,
                                    height: Dimensions.get('screen').width * 0.04,
                                    marginLeft: 20 
                                    }} 

                            />
                            <McText semi size={13} color={theme.colors.text1} style={{ marginLeft: 8 }}>34° C</McText>
                        </View>
                        <McText medium size={13} color={theme.colors.text3} style={{ marginTop: 7 }}>{dnme}, Mars {yr}</McText>
                    </View>

                    <View>
                        <Image 
                            source={Images.logo} 
                            style={{
                                resizeMode: 'stretch',
                                width: Dimensions.get('screen').width * 0.2,
                                height: Dimensions.get('screen').width * 0.2,
                            }}
                        />
                        <McText secondary size={19} >DigitalOfficeTradLTD</McText>
                        <View style={{ alignContent: 'space-between', height: 110, width: 189, }}>
                            <McText medium size={14} color={theme.colors.text3}
                                style={{ marginTop: 16, lineHeight: 22 }}
                            >Créer une entreprise au Royaume-Uni </McText>
                            <McText medium size={12} color={theme.colors.text3} style={{ flex:1,marginTop: 16 }}>Le climat entrepreneurial du Royaume-Uni lui a valu l'appellation de « nation de commerçants ». L'entrepreneuriat contribue continuellement à l'économie britannique et au profil commercial du pays. Le gouvernement a également œuvré concrètement, en facilitant le développement du marché national des entrepreneurs et en encourageant les citoyens à créer leur propre entreprise. </McText>
                        </View>
                    </View>

                    <View>
                        {/* <View></View> */}
                        <View>
                            <TouchableOpacity style={{
                                height: 50, width: 190, borderRadius: 10,
                                backgroundColor: theme.colors.primary, flexDirection: 'row', justifyContent: 'center',
                                alignItems: 'center'

                            }} onPress={() => {
                                navigation.navigate('Login')
                            }}>
                                <McText semi size={16} color="#212330">S'identifier</McText>
                                <McImage source={Images.right_arrow} style={{ marginLeft: 8 }} />
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('RegistrationStep')
                        }}>
                            <View style={{ alignItems: 'center', marginTop: 30, }}>
                                <McText size={16} color={theme.colors.text1}>Créer un compte</McText>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <McText></McText>
                        </View>
                        <View>
                            <McText></McText>
                        </View>
                    </View>



                </View>
            </View>
        </View>
    );
};


export default CoverPage;

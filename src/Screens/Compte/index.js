import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';
import styled, { useTheme } from 'styled-components/native'
import { McText, McImage } from 'Components'
import { Ionicons, MaterialCommunityIcons , AntDesign } from "@expo/vector-icons";

import { Avatar } from 'react-native-paper';
const Compte = ({ animatedStyle }) => {
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
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>

                    </View>

                    <View style={{ alignSelf: "center" }}>
                        <View style={styles.profileImage}>
                            <Avatar.Image source={require("../../../assets/images/profile-pic.jpg")} size={200} style={styles.image} resizeMode="center" />
                        </View>


                        <View style={styles.add}>
                            <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <McText color={theme.colors.text1} size={30}>Bernardine</McText>
                        <McText color={theme.colors.text3} size={14}>bernardinanjarasoa@gmail.com</McText>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="call-outline" size={15} color={theme.colors.text3} style={{ marginTop: 6, marginLeft: 2, marginRight: 15 }}></Ionicons>
                        <McText color={theme.colors.text3} size={19}>+261 32 91 884 36</McText>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.btn}>
                        <MaterialCommunityIcons name="form-textbox-password" size={18} color= "#FFF" style={{ marginTop: 16, marginLeft: 2, marginRight: 13 }} />
                        <McText color="#FFFF" size={25} h4 style= {{marginTop : 15}}>Modifier le mot de passe</McText>
                    </View>

                    <View style={styles.btn}>
                        <AntDesign name="profile" size={18} color= "#FFF" style={{ marginTop: 16, marginLeft: 2, marginRight: 13 }} />
                        <McText color="#FFFF" size={25} h4 style= {{marginTop : 15}}>Modifier le Profil</McText>
                    </View>

                </ScrollView>
            </SafeAreaView>


        </Animated.View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    line: {
        width: 400,
        height: 2,
        backgroundColor: '#DFD8C8',
        marginTop: 10,

    },
    btn: {
        width: 250,
        height: 60,
        backgroundColor: '#E67E22',
        borderRadius: 15,
        marginTop: 14,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 60,
        flexDirection: 'row', 
        
    }

})

export default Compte;

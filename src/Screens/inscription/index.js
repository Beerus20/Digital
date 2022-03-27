import React, { useState, useContext } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Images } from 'Constants'
import { McText } from 'Components'
import { Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { AuthContext } from '../../context/AppContext';
import axios from 'axios';

const Inscription = ({ navigation }) => {




    const [etape, setEtape] = useState("0")
    const [visible, setVisible] = React.useState(false);
    const [tittreE, setTitreE] = useState("")
    const [messaE, setMessageE] = useState('')
    const [verification, setVerification] = useState("")
    const [pseudonyme, setPseudonyme] = useState("")
    const [email, setEmail] = useState("")
    const [mdp, setMdp] = useState("")
    const [mdpC, setMdpC] = useState("")
    const hideDialog = () => setVisible(false);


    const style = StyleSheet.create({
        imageBack: {
            height: Dimensions.get('window').height / 2.5
        },
        bottomView: {
            flex: 1.5,
            backgroundColor: "#ffffff",
            bottom: 50,
            borderTopStartRadius: 60,
            borderTopEndRadius: 60
        },
        form: {
            marginTop: 15,
            justifyContent: 'center',


        },
        container: {
            height: 42,
            width: "92%",
            borderRadius: 25,
            marginTop: 20,
            justifyContent: 'center',

        },
        textInput: {
            marginTop: 0,
            width: "100%",
            borderColor: "#0B3270",
            borderWidth: 1,
            paddingLeft: 15,
            marginLeft: 15
        },
        btn: {
            height: 42,
            width: "92%",
            borderRadius: 25,
            marginTop: 20,
            borderColor: "black",
            backgroundColor: '#F39F8D',
            justifyContent: "center",
            alignItems: "center",
        },
        text: {
            fontSize: 14,
            fontWeight: "600",
            color: "#fff"
        },
        textError: {
            fontStyle: 'italic', color: 'red', marginEnd: 15, flex: 1, alignItems: 'center', justifyContent: 'center'

        }

    })

    const loginHandle = (userName, password) => {
        signIn(userName, password)
    }

    /**-------------------------------------------------------- */

    async function saveItem(item, selectedValue) {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.error('AsyncStorage error: ' + error.message);
        }
    }
    const userSignup = () => {
        if (!username || !password) return;
        fetch('the database link', {
          method: 'POST',
        })
        .then((response) => response.json())
        .then((responseData) => {
          this.saveItem('id_token', responseData.id_token)
        })
        .done();
      }
    /**-------------------------------------------------------- */


    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
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


            {/* ..................................... */}

            {etape === "0" ? <>

                <View style={style.form}>

                    <McText h3 style={{ color: "black", marginLeft: 25 }} >Etape 1</McText>

                    <View style={style.container}>
                        <TextInput style={{ ...style.container, ...style.textInput }} placeholder="Entre nom de l'entreprise pour vérification ..." onChangeText={function (e) {
                            setVerification(e)

                        }} />

                    </View>


                    <View style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 17,
                        backgroundColor: "#F39F9D",
                        marginHorizontal: 20,
                        borderRadius: 15,

                    }}>
                        <Text style={{ textAlignVertical: "center", textAlign: "center", color: "#FFF", fontSize: 15, height: 55, width: 313 }}
                            onPress={

                                function () {

                                    setEtape(1)

                                }
                            }>
                            Voir disponibilité
                        </Text>

                    </View>













                </View>
                <Text
                    style={{
                        fontSize: 20,
                        marginTop: 30,
                        alignSelf: "center",
                    }}
                >Notre partenaire Bancaire</Text>

                <View style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Image source={Images.wize}
                        style={{ width: 300, height: 60, alignItems: 'center', justifyContent: 'center', marginLeft: 75, marginTop: 10 }}
                    />
                </View>
                <Text
                    style={{

                        marginTop: 11,
                        opacity: 0.4,
                        marginLeft: 15,
                        marginRight: 5

                    }}
                >
                    Notre partenaire Bancaire Wise vous permet d’ouvrir un compte bancaire professionnel 100% en ligne sans vous déplacer une carte de paiement, recevoir et émettre des virements dans le monde entier. Wise parmi les meilleurs Fintech bancaires avec plus de 8 millions de clients, nous l’utilisons nous-mêmes depuis des années. Pour ouvrir votre compte très simple et très rapide,
                </Text>
            </> :

                <View>
                    <McText h3 style={{ color: "black", marginLeft: 25, marginTop: 10 }} >Etape 2</McText>
                    <View style={style.container}>
                        <TextInput style={{ ...style.container, ...style.textInput }} placeholder="Pseudonyme" onChangeText={function (e) {
                            setPseudonyme(e)
                        }} />


                    </View>

                    <View style={style.container}>
                        <TextInput keyboardType='email-address' secureTextEntry={true} style={{ ...style.container, ...style.textInput }} placeholder="Addresse e-mail" onChangeText={function (e) {
                            setEmail(e)
                        }} />
                    </View>

                    <View style={style.container}>
                        <TextInput secureTextEntry={true} style={{ ...style.container, ...style.textInput }} placeholder="Mot de Passe" onChangeText={function (e) {
                            setMdp(e)
                        }} />
                    </View>
                    <View style={style.container}>
                        <TextInput secureTextEntry={true} style={{ ...style.container, ...style.textInput }} placeholder="Confirmer le mot de passe" onChangeText={function (e) {
                            setMdpC(e)
                        }} />
                    </View>

                    <View style={{
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 17,
                        backgroundColor: "#F39F9D",
                        marginHorizontal: 20,
                        borderRadius: 15,

                    }}>
                        <Text style={{ textAlignVertical: "center", textAlign: "center", color: "#FFF", fontSize: 15, height: 55, width: 313 }}
                            onPress={


                                function () {

                                    navigation.push("Home")






                                }
                            }>
                            S'incrire
                        </Text>

                    </View>
                </View>





            }

            {/* ........................................................... */}

            <Provider>
                <View>

                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                            <Dialog.Title style={{ color: 'black' }}>{tittreE}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{messaE}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <TouchableOpacity activeOpacity={1}
                                    onPress={hideDialog}
                                >
                                    <View style={{
                                        width: 275, height: 50, backgroundColor: "#EC9212", marginBottom: 10, marginRight: 5, borderRadius: 10,

                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <McText h5 style={{ color: "#FFF" }} >OK</McText>
                                    </View>
                                </TouchableOpacity>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>

        </View>
    )
}


export default Inscription
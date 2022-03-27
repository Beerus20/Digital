import React, { useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Paragraph, Dialog, Portal, Provider, AsyncStorage } from 'react-native-paper';
import { Images } from 'Constants'
import { McText, McImage } from 'Components'
import axios from 'axios'





const Login = ({ navigation }) => {
    
   
   
    
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

    const [visible, setVisible] = React.useState(false);
    const [tittreE, setTitreE] = useState("")
    const [messaE, setMessageE] = useState('')
    const [identifiant, setIdenfiant] = useState('')
    const [mdp, setMdp] = useState('')


    /**-------------------------------------------------------- */

    async function saveItem(item, selectedValue) {
        try {
          await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
          console.error('AsyncStorage error: ' + error.message);
        }
    }


    const userLogin = () => {
        if (!identifiant || !mdp) return;
        fetch('the database link', {
          method: 'POST',        
        })
        .then((response) => response.json())
        .then((responseData) => {
          this.saveItem('id_token', responseData.id_token),
          navigation.navigate('Home')
        })
        .done();
      }

    /**-------------------------------------------------------- */


    const hideDialog = () => setVisible(false);


    
    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Image source={Images.logoBavata}
                style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginLeft: 85 }}
            />
            <McText
                style={{
                    fontSize: 30,

                    alignSelf: "center",
                }}
            >DigitalOffficeTradTLD</McText>



            <McText
                style={{


                    marginHorizontal: 55,
                    textAlign: 'center',
                    marginTop: 5,
                    opacity: 0.4
                }}
            >
                création de votre société au Royaume-Uni
            </McText>

            <View style={style.form}>

                {/* <TextBox placeholder="Email Address" onChangeText={text => handleChange(text, "email")} /> */}

                <View style={style.container}>
                    <TextInput style={{ ...style.container, ...style.textInput }} placeholder='Identifiant ou e-mail' onChangeText={function (e) {
                        setIdenfiant(e)
                    }} />

                </View>
                <View style={style.container}>
                    <TextInput style={{ ...style.container, ...style.textInput }} placeholder='Mot de passe' onChangeText={function (e) {
                        setMdp(e)
                    }} />

                </View>

                <TouchableOpacity
                   
                >
                    <View style={{
                        height: 55,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 17,
                        backgroundColor: "#EC9212",
                        marginHorizontal: 20,
                        borderRadius: 15,

                    }}>
                        <McText h6 style={{ textAlignVertical: "center", textAlign: "center", color: "#FFF", fontSize: 16, height: 55, width: 313 }} /*onPress={Insert}*/>
                            Connexion
                        </McText>

                    </View>
                </TouchableOpacity>












            </View>


            <McText

                // onPress={()=>navigate('Register')}

                style={{
                    alignSelf: "center",
                    color: "#00716F",

                    paddingVertical: 30
                }}>Mot de Passe oublié ?</McText>


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


export default Login
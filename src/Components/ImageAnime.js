import React, { Component } from 'react'
import {View , Text , ImageBackground , StyleSheet , Image} from 'react-native'
import Swiper from 'react-native-swiper'
export class ImageAnime extends Component {

    constructor(props) {
        super(props);
        this.state = {
          slides: [
            { id: 1, image: require("../../assets/images/verification.png") },
            { id: 2, image: require("../../assets/images/choix-option.jpg") },
            { id: 3, image: require("../../assets/images/choix-de-payement.jpg") },
            { id: 4, image: require("../../assets/images/remplir-formulaire.jpg") },
            { id: 5, image: require("../../assets/images/receve-document.png") },
           
        
          ]
        }
      }
    

  render() {
    return (
        <View style={{ flex: 1, marginBottom: 0, paddingBottom: 15, position: "relative", marginRight : 115 }}>
        <Swiper autoplay={true}
          dot={<View />}
          style={{ height: 150, marginBottom: 0, paddingBottom: 0, }}
        >

          {this.state.slides.map((slide) => {
            return (
              <View key={slide.id}>
                <Image source={slide.image} style={styles.back} />
              </View>
            )
          })
          }
        </Swiper>
          </View>

  
    )
  }
}

export default ImageAnime

const styles = StyleSheet.create({
 
    back: {
        width: 500,
        height: 500,
        position: 'absolute',
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 10,
    
  
    },
  
  });
import React from "react";
import {  Image, ScrollView, StyleSheet, Dimensions } from "react-native";


import {
useFonts,
} from "@expo-google-fonts/dev";

export default function Pack (){

	let [fontsLoaded] = useFonts({
	});

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Image style = {stylesheet._Rectangle_1} source = {{uri: imageUrl_Rectangle_1}}>
		</Image>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_Rectangle_1: {
		position: "absolute",
		width: 108,
		height: 165,
		borderRadius: 15,
		opacity: 1,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});

const imageUrl_Rectangle_1 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/64cb198201b6174bce37273b97d18073"
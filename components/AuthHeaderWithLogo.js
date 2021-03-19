import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';


export default function AuthHeaderWithLogo({text}) {

	return (
			<View style={styles.container}>
				<Image style={styles.logo} source={require('../assets/logo.png')} />
				<Image style={styles.logoText} source={require('../assets/logo-text.png')} />
				<Text style={styles.text} >{text}</Text>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	logo: {
		width: 200,
		height: 200,
	},
	
	logoText: {
		marginVertical: 20,
	},
	
	text: {
		color: 'white'
	},
	
})

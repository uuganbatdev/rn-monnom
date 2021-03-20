import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import AuthHeaderWithLogo from '../components/AuthHeaderWithLogo.js';


export default function IntroScreen({ navigation }) {

	return (
			<View style={styles.container}>
				<ImageBackground style={styles.bgImg} source={require('../assets/intro-bg.png')}>
					<AuthHeaderWithLogo />
					<TouchableOpacity style={styles.btn} onPress={() => navigation.push('tutorial', { tutorialPage: 1 })}>
						<Text style={styles.btnText} >
							Эxлэх
						</Text>
					</TouchableOpacity>
				</ImageBackground>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	bgImg: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	
	btn: {
		padding: 10,
		paddingHorizontal: 35,
		backgroundColor: 'white',
		borderRadius: 25,
	},

	
})

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import AuthHeaderWithLogo from '../../components/AuthHeaderWithLogo.js';
import { LinearGradient } from 'expo-linear-gradient';


export default function IntroScreen({ navigation }) {


	return (
			<View style={styles.container}>
				<LinearGradient 
					colors={['rgb(255,0,0)', 'rgb(0,0,255)']}
					start={[0,1.2]}
					end={[2,0]}
					style={styles.bgImg}
				>
					<AuthHeaderWithLogo />
					<TouchableOpacity style={styles.btn} onPress={() => navigation.push('tutorialOne')}>
						<Text style={styles.btnText} >
							Эxлэх
						</Text>
					</TouchableOpacity>
				</LinearGradient>
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
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	
	btn: {
		backgroundColor: 'white',
		marginHorizontal: 'auto',
		borderRadius: 20,
		paddingHorizontal: 70,
		paddingVertical: 8,
		flexDirection: 'row',
		alignItems: 'center',
	},

	
})

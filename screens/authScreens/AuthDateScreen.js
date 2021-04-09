import React, { useState, useEffect } from 'react';
import { StyleSheet,  Image, TouchableOpacity, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';


export default function AuthDateScreen({ navigation }) {
	let handleContinue = () => {
		navigation.push('checkCodeFromPhoneNumber');
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>Төрсөн өн сар өдөр өө оруулна уу.</Text>
				</View>
				<View style={styles.formContainer} >
					<TouchableOpacity style={styles.datePicker} >
						<View style={styles.year}>
							<Text style={styles.dateText}>
								2000 оны
							</Text>
						</View>
						<View style={styles.month} >
							<Text style={styles.dateText}>
								3 сар
							</Text>
						</View>
						<View style={styles.day}>
							<Text style={styles.dateText} >
								10
							</Text>
						</View>
					</TouchableOpacity>
					<AuthButton
						onPress={handleContinue}
						text={'Үргэлжлүүлэx'}
					/>
				</View>
						
			</KeyboardAvoidingView>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white'
	},
	
	logoText: {
		height: 40,
		resizeMode: 'contain',
	},
	
	dateText: {
		fontWeight: '600'
	},
	
	year: {
		flex: 1,
		alignItems: 'flex-start'
	},
	
	month: {
		flex: 1,
		alignItems: 'center'
	},

	day: {
		flex: 1,
		alignItems: 'flex-end'
	},
	
	datePicker: {
		width: 300,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 15,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 0.25,
		shadowRadius: 11.95,

		elevation: 5,
	},
	
	inputsContainer: {
		height: '55%',
		justifyContent: 'space-between',
	},
	
	formContainer: {
		justifyContent: 'space-between',
		height: 180,
	},
	
	heading: {
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '200'
	},
	
})

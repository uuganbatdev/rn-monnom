import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';


export default function AuthPasswordScreen({ navigation }) {
	let handleContinue = () => {
		navigation.push('authDateScreen');
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>Бүртгүүлэх</Text>
				</View>
				<View style={styles.formContainer} >
					<View style={styles.inputsContainer} >
						<AuthInput
							placeholder={'Нууц үг'}
							iconpath={require('../../assets/privacy.png')}
							maxLength={8}
						/>
						<AuthInput
							placeholder={'Нууц үг давтах'}
							iconpath={require('../../assets/privacy.png')}
							maxLength={8}
						/>
					</View>
					<AuthButton
						onPress={handleContinue}
						text={'Бүртгүүлэx'}
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

import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Image,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';


export default function RequestResetPasswordScreen({ navigation }) {
	let handleGetCode = () => {
		navigation.push('checkCodeFromPhoneNumber', { accesingFrom: 'signIn' });
	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<View>
					<Text style={styles.heading}>Нууц үг сэргээx</Text>
				</View>
				<View style={styles.formContainer} >
					<AuthInput
						placeholder={'Утасны дугаар'}
						iconpath={require('../../assets/phone.png')}
						type={'number-pad'}
						maxLength={8}
					/>
					<AuthButton
						onPress={handleGetCode}
						text={'Код авах'}
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
	
	formContainer: {
		justifyContent: 'space-between',
		height: 120,
	},
	
	heading: {
		marginTop: 80,
		marginBottom: 40,
		fontWeight: '200'
	},
	
})

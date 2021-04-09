import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import FancyAuthHeader from '../../components/FancyAuthHeader.js';


export default function CheckCodeFromPhoneNumberScreen({ navigation }) {
	let handleConfirm = () => {
		navigation.push('authEmail');
	}

	let handleSendCodeAgain = () => {

	}

	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
				<FancyAuthHeader/>
				<Image style={styles.logoText} source={require('../../assets/logo-text-black.png')} />
				<View>
					<Text style={styles.heading}>
						Таны утсанд мессежээр ирсэн 6 оронтой кодыг оруулна уу!
					</Text>
				</View>
				<View style={styles.formContainer} >
					<AuthInput
						placeholder={'Код'}
						iconpath={require('../../assets/privacy.png')}
						type={'number-pad'}
						maxLength={8}
					/>
					<View style={styles.warning} >
						<Text style={{...styles.warningText, display: 'flex'}} >
							Баталгаажуулах код буруу байна.
						</Text>
					</View>
					<AuthButton
						onPress={handleConfirm}
						text={'Баталгаажуулах'}
					/>
					<View style={styles.formTitles} >
						<Text style={styles.btnTitle} >
							Код ирэхгүй бол утасны дугаараа шалгаад дахин код авах дээр дарна уу.
						</Text>
						<Text style={styles.counter}>
							00:57
						</Text>
					</View>
					<AuthButton
						onPress={handleSendCodeAgain}
						text={'Дахин код авах'}
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
		alignItems: 'center',
		height: 250,

	},
	
	btnTitle: {
		width: 300,
		textAlign: 'center'
	},
	
	
	warning: {
		height: 12,
		alignSelf: 'flex-start'
	},
	
	warningText: {
		fontSize: 10,
		fontWeight: '300',
		color: 'red'
	},
	
	
	counter: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '700'
	},
	
	
	heading: {
		width: 300,
		textAlign: 'center',
		marginTop: 40,
		marginBottom: 20,
		fontWeight: '200'
	},
	
})

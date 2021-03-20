import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground,  PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../components/AuthInput.js';
import DatePicker from '../components/DatePicker.js';
import AuthButton from '../components/AuthButton.js';
import AuthHeaderWithLogo from '../components/AuthHeaderWithLogo.js';


export default function SignUpScreen() {
	let [ phoneNumber, setPhoneNumber ] = useState('')
	let [ email, setEmail ] = useState('')
	let [ password, setPassword ] = useState('')
	let [ repeatPassword, setRepeatPassword ] = useState('')
	let [ date, setDate ] = useState({
		year: '',
		month: '',
		day: ''
	})


	let printvalues = () => {
		console.log('phone ',phoneNumber)
		console.log('email ',email)
		console.log('password ',password)
		console.log('pass2 ',repeatPassword)
		console.log('date ',date)
	}
	printvalues()
	return (
			<KeyboardAvoidingView behavior={"height"} style={styles.container}>
					<ImageBackground style={styles.bgImg} source={require('../assets/intro-bg.png')}>
						<AuthHeaderWithLogo/>
						<View>
							<Text style={styles.heading}>Бүртгүүлэх</Text>
						</View>
						<AuthInput
							placeholder={'Утасны дугаар'}
							iconpath={require('../assets/phone.png')}
							type={'number-pad'}
							maxLength={8}
							state={phoneNumber}
							setState={setPhoneNumber}
						/>
						<AuthInput
							placeholder={'Е-мэйл'}
							iconpath={require('../assets/mail.png')}
							state={email}
							setState={setEmail}
						/>
						<DatePicker
							state={date}
							setState={setDate}
						/>
						<AuthInput
							placeholder={'Нууц үг'}
							iconpath={require('../assets/privacy.png')}
							hidden={true}
							state={password}
							setState={setPassword}
						/>
						<AuthInput
							placeholder={'Нууц үг давтах'}
							iconpath={require('../assets/privacy.png')}
							state={repeatPassword}
							setState={setRepeatPassword}
							hidden={true}
						/>

						<AuthButton/>
						
					</ImageBackground>
			</KeyboardAvoidingView>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	
	heading: {
		color: 'white',
		marginVertical: 10,
		fontSize: 20,
		fontWeight: '600'
	},
	
	bgImg: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'cover'
	},
	
})

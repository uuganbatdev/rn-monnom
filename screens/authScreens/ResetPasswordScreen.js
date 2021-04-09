import React, { useState, useEffect } from 'react';
import { StyleSheet, PlatForm, KeyboardAvoidingView, Text, View } from 'react-native';
import AuthInput from '../../components/AuthInput.js';
import AuthButton from '../../components/AuthButton.js';
import AuthHeaderWithLogo from '../../components/AuthHeaderWithLogo.js';


export default function ResetPasswordScreen() {

	return (
			<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
				<Text>
					ResetPasswordScreen
				</Text>
				<AuthInput/>
				<AuthButton/>
				<AuthHeaderWithLogo/>

			</KeyboardAvoidingView>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 201,5,21 )',
	}
})

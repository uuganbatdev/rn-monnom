import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function AuthButton({ onPress }) {

	return (
		<TouchableOpacity style={styles.btn} onPress={onPress}>
			<Text  style={styles.text} >
				Бүртгүүлэх
			</Text>
		</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	btn: {
		width: 300,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		height: 40,
		borderRadius: 4,
		marginVertical: 8,
	},	
	
	text: {
		color: 'black'
	},
	
})

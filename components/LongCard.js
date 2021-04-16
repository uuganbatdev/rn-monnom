import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function LongCard({ text }) {
	console.log(text)
	return (
			<View style={styles.container}>
				<Text>
					{text}
				</Text>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: 300,
		height: 200,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 174,158,207 )',
		shadowColor: '#fff',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.9,
		shadowRadius: 5,  
		elevation: 5 
	}
})

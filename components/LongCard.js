import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function LongCard() {

	return (
			<View style={styles.container}>
				<Text>
					LongCard
				</Text>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 200,
		width: 300,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 174,158,207 )',
		shadowColor: '#fff',
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.5,
		shadowRadius: 5,  
		elevation: 5
	}
})

import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

export default function TinyImagedList () {
	
	return (
			<View style={styles.container}>
				<Text>TinyImagedList</Text>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 170,82,47 )',
	}
})

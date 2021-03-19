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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 174,158,207 )',
	}
})
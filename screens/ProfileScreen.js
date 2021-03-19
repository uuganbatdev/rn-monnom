import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigateFromProfileButton from '../components/NavigateFromProfileButton.js';
import Header from '../components/Header.js';


export default function ProfileScreen() {

	return (
			<View style={styles.container}>
				<Text>
					ProfileScreen
				</Text>
				<NavigateFromProfileButton/>
				<Header/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 252,39,216 )',
	}
})

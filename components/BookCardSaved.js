import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width: screenWidth} = Dimensions.get('window');

export default function BookCard({ bookName, bookImageSource }) {
	let [ icon, setIcon ] = useState('bookmark-plus');

	return (
			<TouchableOpacity style={styles.container}>
				<Image style={styles.bookImage} source={bookImageSource} />
				<Text
					style={styles.bookNameText}
					numberOfLines={1}
				>
					{bookName}
				</Text>
			</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: screenWidth * 0.9 /4,
		marginBottom: screenWidth * 0.9 * 0.9 * 0.06 
	},
	
	bookImage: {
		borderRadius: 5,
		width: '80%',
		height: screenWidth * 0.9 * 0.8 * 9/6 /4,
		resizeMode: 'cover',
	},

	bookNameText: {
		width: '80%',
		color: 'white',
		fontSize: 9 
	},
	
	authorText: {
		color: '#D2D2D2'
	},
	
	iconContainer: {
		position: 'absolute',
		right: 0,
		top: 150,
		padding:5,
	},
	
	
	
})

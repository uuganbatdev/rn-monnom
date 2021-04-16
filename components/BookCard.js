import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function BookCard({ author, bookName, bookImageSource }) {
	let [ icon, setIcon ] = useState('bookmark-plus');

	let handleSaveBook = () => {
		if (icon == 'bookmark-plus') {
			setIcon('bookmark-minus')
		} else {
			setIcon('bookmark-plus')
		}
	}

	return (
			<TouchableOpacity style={styles.container}>
				<Image style={styles.bookImage} source={bookImageSource} />
				<Text style={styles.bookNameText} >
					{bookName}
				</Text>
				<Text style={styles.authorText} >
					{author}
				</Text>
				<TouchableOpacity style={styles.iconContainer} onPress={handleSaveBook}>
					<MaterialCommunityIcons name={icon} color={'#DE5246'} size={46} />
				</TouchableOpacity>
			</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		borderRadius: 10,
		marginRight: 20,
		width: 150,
	},
	
	bookImage: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
	},

	bookNameText: {
		width: '90%',
		color: 'white',
		fontSize: 18 
	},
	
	authorText: {
		color: '#D2D2D2'
	},
	
	iconContainer: {
		position: 'absolute',
		right: 0,
		top: 140,
		padding:5 
	},
	
	
	
})

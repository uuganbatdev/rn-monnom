import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function PodcastCard ({ author, podcastImageSource }) {
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
				<Image style={styles.bookImage} source={podcastImageSource} />
				<Text style={styles.author} >
					{author}
				</Text>
				<TouchableOpacity style={styles.iconContainer} onPress={handleSaveBook}>
					<MaterialCommunityIcons name={icon} color={'#DE5246'} size={36} />
				</TouchableOpacity>
			</TouchableOpacity>
	)

}

let styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		borderRadius: 10,
		marginRight: 20,
		width: 120,
	},
	
	bookImage: {
		width: '100%',
		height: 120,
		resizeMode: 'cover',
	},

	author: {
		width: '100%',
		color: 'white',
	},
	
	iconContainer: {
		position: 'absolute',
		right: 0,
		top: 70,
		padding:5,
	},
	
	
	
})

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from 'react-native-slider';

import AudioControl from '../components/AudioControl.js';

const {width: screenWidth} = Dimensions.get('window');

export default function PodcastPlayerScreen ({ navigation }) {

	return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()} >
					<MaterialCommunityIcons name="chevron-left" color={'white'} size={46} />
				</TouchableOpacity>
				<View style={styles.innerContainer} >
					<View style={styles.episodeDetails} >
						<Image style={styles.image} source={require('../assets/podcast-1.png')} />
						<Text style={styles.podcastName} numberOfLines={1}>Ideree's Podcast</Text>
						<Text style={styles.episodeName} numberOfLines={1}>Episode 66: Lodoisambuu. Ulaanbal</Text>
					</View>
					<AudioControl />
				</View>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#0F191E',
		paddingTop: 30
	},

	innerContainer: {
		width: '90%',
		alignSelf: 'center',
		alignItems: 'center'
	},
	
	episodeDetails: {
		alignItems: 'center'
	},
	
	image: {
		width: screenWidth * 0.7,
		height: screenWidth * 0.7,
		borderRadius: 5,
		resizeMode: 'cover',
		marginBottom: 10
	},
	
	podcastName: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold'
	},
	
	episodeName: {
		color: 'grey',
		fontSize: 18 
	},

	
})

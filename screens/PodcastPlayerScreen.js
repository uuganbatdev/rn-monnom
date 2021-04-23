import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from 'react-native-slider';

import AudioControl from '../components/AudioControl.js';
import PodcastEpisodesTab from '../components/PodcastEpisodesTab.js';
import PodcastEpisode from '../components/PodcastEpisode.js';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
let episodes = [ 1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8 ];

export default function PodcastPlayerScreen ({ navigation }) {

	return (
		<View style={styles.container} >
			<FlatList
				style={styles.innerContainer} 
				showsVerticalScrollIndicator={false}
				data={episodes}
				renderItem={({item}) => (
					<PodcastEpisode name={item} />
				)}
				ListHeaderComponent={
					<>
						<TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()} >
							<MaterialCommunityIcons name="chevron-left" color={'white'} size={46} />
						</TouchableOpacity>
						<View style={styles.episodeDetails} >
							<Image style={styles.image} source={require('../assets/podcast-1.png')} />
							<Text style={styles.podcastName} numberOfLines={1}>Ideree's Podcast</Text>
							<Text style={styles.episodeName} numberOfLines={1}>Episode 66: Lodoisambuu. Ulaanbal</Text>
						</View>
						<AudioControl />
						<Text style={styles.listTitle} >Бусад дугаарууд</Text>
					</>
				}
			/>
		</View>
	)
}

let styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#0F191E',
		alignItems: 'center'
	},
	
	listContainer: {
		width: '100%',
		flex: 1,
		paddingTop: 10,
	},
	
	backButton: {
		right: 16,
	},
	
	listTitle: {
		width: '100%',
		color: 'white',
		fontSize: 20,
		marginBottom: 10,
	},
	
	innerContainer: {
		width: '90%',
	},
	
	episodeDetails: {
		alignItems: 'center'
	},
	
	image: {
		width: screenHeight * 0.25,
		height: screenHeight * 0.25,
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

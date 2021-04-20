import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from 'react-native-slider';

import AudioControl from '../components/AudioControl.js';
import PodcastEpisodesTab from '../components/PodcastEpisodesTab.js';
import PodcastEpisode from '../components/PodcastEpisode.js';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
let episodes = [ 1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8 ];

let ChapterList = () => {
	return (
		<TouchableOpacity style={styles.chapter} >
			<Text style={styles.innerChapter} numberOfLines={1} >Бүлэг 2 : Хавар цаг Оюуны мэлмий</Text>
		</TouchableOpacity>
	)
}

export default function BookPlayerScreen ({ navigation }) {

	return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()} >
					<MaterialCommunityIcons name="chevron-left" color={'white'} size={46} />
				</TouchableOpacity>
				<View style={styles.innerContainer} >
					<View style={styles.episodeDetails} >
						<Image style={styles.image} source={require('../assets/book-1.png')} />
						<Text style={styles.episodeName} numberOfLines={1}>Бүлэг 1 : Оршихуй</Text>
					</View>
					<AudioControl
						bookPlayer={true}
					/>
					<View style={styles.listContainer} >
						<Text style={styles.listTitle} >Бүлгүүд</Text>
						<FlatList
							data={episodes}
							renderItem={({item}) => (
								<ChapterList name={item} />
							)}
						/>
					</View>
				</View>
			</View>
	)
}

let styles = StyleSheet.create({
	
	chapter: {
		paddingVertical: 10 
	},
	
	innerChapter: {
		color: 'white',
		fontSize: 18 
	},
	
	container: {
		width: '100%',
		height: '100%',
		backgroundColor: '#0F191E',
	},
	
	listContainer: {
		width: '100%',
		flex: 1,
		paddingTop: 10,
	},
	
	listTitle: {
		color: 'white',
		fontSize: 20,
		marginBottom: 10,
	},
	
	innerContainer: {
		width: '90%',
		flex: 1,
		alignSelf: 'center',
		alignItems: 'center'
	},
	
	episodeDetails: {
		alignItems: 'center'
	},
	
	image: {
		width: screenHeight * 0.25 * 6/9,
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
		color: 'white',
		fontSize: 18 
	},

	
})

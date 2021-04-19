import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

let episodes = [ 1,2,3,4,5,6,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8 ];

let PodcastEpisode = ({ name }) => {
	let navigation = useNavigation();
	
	let playPodcast = () => {
		navigation.push('podcastPlayerScreen')
	}

	return (
		<View style={styles.episodeContainer} >
			<Image style={styles.episodeImage} source={require('../assets/podcast-1.png')} />
			<View style={styles.episodeNameContainer} >
				<Text 
					style={styles.episodeName}
					numberOfLines={1}
				>
					Ideree’s podcast 66: Lodoisambuu, Ulaanbal
				</Text>
				<Text style={styles.time} >2:13:45</Text>
			</View>
			<TouchableOpacity style={styles.downloadIcon} onPress={playPodcast} >
				<MaterialCommunityIcons name={'download'} color={'#DE5246'} size={25} />
			</TouchableOpacity>
		</View>
	)
}

export default function PodcastEpisodesTab () {

	return (
		<View style={styles.listContainer} >
			<FlatList
				data={episodes}
				renderItem={({item}) => (
					<PodcastEpisode name={item} />
				)}
			/>
		</View>
	)

}

let styles = StyleSheet.create({

	listContainer: {
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		paddingHorizontal: 15,
		width: '100%',
		flex: 1,
		backgroundColor: '#2B2F48',
	},
	
	episodeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: 'grey'
	},
	
	episodeNameContainer: {
		width: '65%',
		alignItems: 'flex-end'
	},
	
	episodeName: {
		color: 'white'
	},
	
	time: {
		color: 'grey'
	},
	
	episodeImage: {
		width: 50,
		height: 50,
		marginVertical: 10,
		resizeMode: 'cover',
		borderRadius: 5
	},
	
	downloadIcon: {
		padding: 7,
	},
	
})

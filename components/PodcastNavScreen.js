import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LongCard from './LongCard.js';
import PodcastCard from './PodcastCard.js';
import TinyImagedList from './TinyImagedList.js';


export default function PodcastNavScreen() {

	return (
			<View style={styles.container}>
				<Text>
					PodcastNavScreen
				</Text>
				<LongCard/>
				<PodcastCard/>
				<TinyImagedList/>

			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 151,27,95 )',
	}
})

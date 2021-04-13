import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import PodcastCard from './PodcastCard.js';
import TinyImagedList from './TinyImagedList.js';
import LongCardList from './LongCardList.js';


export default function PodcastNavScreen() {

	return (
			<View style={styles.container}>
				<LongCardList />
				<PodcastCard/>
				<TinyImagedList/>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		height: '100%' ,
		backgroundColor: '#0F191E',
		justifyContent: 'flex-start',
	},

})

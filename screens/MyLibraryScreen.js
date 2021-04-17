import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PodcastCard from '../components/PodcastCard.js';
import Header from '../components/Header.js';
import BookCard from '../components/BookCard.js';
import MyLibraryHeader from '../components/MyLibraryHeader.js';


export default function MyLibraryScreen() {

	return (
			<View style={styles.container}>
				<MyLibraryHeader />
				<PodcastCard/>
				<BookCard/>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		backgroundColor: '#0F191E',
	}
})

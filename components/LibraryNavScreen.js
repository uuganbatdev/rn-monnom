import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LongImageCarousel from './LongImageCarousel.js';
import BookCardList from './BookCardList.js';

export default function LibraryNavScreen() {

	return (
			<ScrollView style={styles.container}>
				<LongImageCarousel />
				<View style={styles.innerContainer}>
					<BookCardList
						title={'Аудио Ном'}
					/>
				</View>
			</ScrollView>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F191E',
	},
	
	innerContainer: {
		marginLeft: '5%'
	},
	
	
})

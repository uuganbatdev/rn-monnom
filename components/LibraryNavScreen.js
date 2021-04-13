import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookCard from './BookCard.js';
import LongCardList from './LongCardList.js';
import LongImageCarousel from './LongImageCarousel.js';

export default function LibraryNavScreen() {

	return (
			<View style={styles.container}>
				<LongImageCarousel />
				<BookCard/>
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0F191E',
	},
	
})

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LongImageCarousel from './LongImageCarousel.js';
import BookCardList from './BookCardList.js';
import SpecialCard from './SpecialCard.js';

export default function LibraryNavScreen() {

	return (
		<ScrollView style={styles.container}>
			<View style={styles.innerContainer}>
				<LongImageCarousel
					title={'Шилдэг түүвэр'}
				/>
				<BookCardList
					title={'Аудио Ном'}
				/>
				<SpecialCard 
					title={'Шинэ, Борлуулалт өндөр'}
				/>
				<BookCardList
					title={'Амьдрал, амжилт'}
				/>
				<BookCardList
					title={'Түүхэн'}
				/>
			</View>
		</ScrollView>
	)

}

let styles = StyleSheet.create({
	container: {
		backgroundColor: '#0F191E',
	},

	innerContainer: {
		marginLeft: '5%'
	},


})

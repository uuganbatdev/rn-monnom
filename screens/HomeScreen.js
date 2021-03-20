import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PodcastNavScreen from '../components/PodcastNavScreen.js';
import Header from '../components/Header.js';
import LibraryNavScreen from '../components/LibraryNavScreen.js';
import LiveNavScreen from '../components/LiveNavScreen.js';
import { createStackNavigator } from '@react-navigation/stack';

let HomeTab = createStackNavigator();

export default function HomeScreen() {

	return (
			<HomeTab.Navigator headerMode='none' style={styles.container}>
				<HomeTab.Screen name='libraryStack' component={LibraryNavScreen} />
				<HomeTab.Screen name='podcastStack' component={PodcastNavScreen} />
				<HomeTab.Screen name='liveStack' component={LibraryNavScreen} />
			</HomeTab.Navigator>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb( 252,136,46 )',
	}
})

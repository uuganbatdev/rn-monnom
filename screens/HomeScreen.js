import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PodcastNavScreen from '../components/PodcastNavScreen.js';
import Header from '../components/Header.js';
import LibraryNavScreen from '../components/LibraryNavScreen.js';
import LiveNavScreen from '../components/LiveNavScreen.js';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

let HomeTab = createStackNavigator();
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
	gestureEnabled: false,
	cardStyle: { backgroundColor: '#0F191E', }
};
export default function HomeScreen({ navigation }) {

	return (
		<View style={styles.container} >
			<Header/>
			<HomeTab.Navigator
				screenOptions={TransitionScreenOptions}
				initialRouteName='libraryStack'
				headerMode='none'
				style={styles.innerContainer}
			>
				<HomeTab.Screen  name='libraryStack' component={LibraryNavScreen} />
				<HomeTab.Screen  name='podcastStack' component={PodcastNavScreen} />
				<HomeTab.Screen  name='liveStack' component={LiveNavScreen} />
			</HomeTab.Navigator>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		
	},

	innerContainer: {
		
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})

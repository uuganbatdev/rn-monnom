import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Slider from 'react-native-slider';

const {width: screenWidth} = Dimensions.get('window');

export default function AudioControl() {
	let [ sliderValue, setSliderValue ] = useState(0);
	let [ soundSliderValue, setSoundSliderValue ] = useState(0);

	return (
		<View style={styles.container} >
			<Slider
				value={sliderValue}
				onValueChange={(value) => setSliderValue(value)}
				width={screenWidth * 0.9}
				thumbTintColor={'white'}
				minimumTrackTintColor={'#DE5246'}
				maximumTrackTintColor={'#DE5246'}
			/>
			<View style={styles.controller} >
				<TouchableOpacity style={styles.iconContainer} >
					<Ionicons name="cloud-download-outline" color={'white'} size={35} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} >
					<MaterialIcons name="rotate-left" color={'white'} size={25} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.midIconContainer} >
					<FontAwesome name="play" color={'white'} size={25} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} >
					<MaterialIcons name="rotate-right" color={'white'} size={25} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconContainer} >
					<MaterialCommunityIcons name="bookmark-outline" color={'white'} size={35} />
				</TouchableOpacity>
			</View>
			<View style={styles.soundSliderContainer} >
				<MaterialCommunityIcons name="volume-medium" color={'#DE5246'} size={25} />
				<Slider
					value={soundSliderValue}
					onValueChange={(value) => setSoundSliderValue(value)}
					width={screenWidth * 0.65}
					thumbTintColor={'white'}
					minimumTrackTintColor={'#DE5246'}
					maximumTrackTintColor={'#DE5246'}
				/>
				<MaterialCommunityIcons name="volume-high" color={'#DE5246'} size={25} />
			</View>
		</View>
	)
}

let styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: '100%'
	},
	
	iconContainer: {
		padding: 5,
	},
	
	midIconContainer: {
		height: 60,
		width: 60,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#DE5246'
	},
	
	controller: {
		marginVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		alignItems: 'center'
	},
	
	soundSliderContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	
	
})

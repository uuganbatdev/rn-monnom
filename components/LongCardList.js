import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,  Text, View, FlatList } from 'react-native'
import LongCard from './LongCard.js';

let data = [
	{
		text: 'sda',
		key: '1' 
	},
	{
		text: 'sd2',
		key: '2'
	},
	{
		text: 'sd3',
		key: '3'
	},
	{
		text: 'sd4',
		key: '4'
	},
	{
		text: 'sd4',
		key: '5'
	},
	{
		text: 'sd4',
		key: '6'
	},
]


export default function LongCardList () {

	let [ states, setStates ] = useState(data);
	let [ num, setNum ] = useState(15);
	
	let addData = () => {
		setStates(prevStates => {
			return (
				[{ text: 'sda', key: num.toString()} ]
			)
		})
		setNum(prevnum => prevnum + 1)
	}

	return (
		<View>
			<TouchableOpacity style={styles.btn} onPress={addData}>
				<Text>
					haha
				</Text>
			</TouchableOpacity>
			<FlatList 
				style={styles.container} 
				data={states}
				renderItem={({ item }) => (
					<LongCard text={item.key}/>		
				)} 
				showsHorizontalScrollIndicator={false}
				horizontal
			/>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flexGrow: 0,
		paddingVertical: 15,
	},
	
	

})

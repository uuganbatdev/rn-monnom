import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native'
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
]


export default function LongCardList () {
	
	return (
			<FlatList 
				style={styles.container} 
				data={data}
				renderItem={({ item }) => (
					<LongCard text={item.text}/>		
				)} 
				getItemLayout={(data, index) => (
					{length: 300, offset: 300 * index, index}
				)}
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				horizontal
			/>
	)

}

let styles = StyleSheet.create({
	container: {
		flexGrow: 0,
		paddingVertical: 15,
	},
	
	

})

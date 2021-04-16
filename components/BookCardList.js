import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity,  Text, View, FlatList } from 'react-native'
import BookCard from './BookCard.js';

let data = [
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-3.png'),
		key: '1' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-2.png'),
		key: '2' 
	},
	{
		author: 'Ц. Оюунгэрэл',
		bookName: 'Жаран Цагаан Хонь',
		bookImageSource: require('../assets/book-1.png'),
		key: '3' 
	},
]
export default function BookCardList ({ title }) {
	let [ bookList, setBookList ] = useState(data);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer} >
				<Text style={styles.title} >
					{title}
				</Text>
			</View>
				<FlatList 
					data={bookList}
					renderItem={({ item }) => (
						<BookCard 
							author={item.author}
							bookName={item.bookName}
							bookImageSource={item.bookImageSource}
						/>		
					)} 
					showsHorizontalScrollIndicator={false}
					horizontal
				/>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		marginVertical: 10,
	},

	title: {
		color: '#DE5246',
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'left',
		marginBottom: 10,
	},
})

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Image } from 'react-native';

export default function AuthInput({ placeholder, iconpath, setState, state, phoneNumber, hidden, type, maxLength }) {
	let [ hiddenVal, setHiddenVal ] = useState(hidden);
	return (
			<View style={styles.container}>
				<View style={styles.iconContainer}>
					<Image style={styles.icon} source={iconpath} />
				</View>
				<TextInput
					style={styles.input}
					autoCorrect={false}
					placeholder={placeholder}
					placeholderTextColor={'rgba(255,255,255,0.4)'}
					keyboardType={type}
					onChangeText={e => setState(e)}
					maxLength={maxLength}
					secureTextEntry={hiddenVal}
					textContentType='none'
				/>
				{
					hidden
						? (<TouchableOpacity style={styles.iconContainer} onPress={() => setHiddenVal(!hiddenVal)}>
								<Image style={styles.icon} source={require('../assets/hidden.png')} />
							</TouchableOpacity>)
						:undefined
				}
			</View>
	)

}

let styles = StyleSheet.create({
	container: {
		width: 300,
		padding: 5,
		borderRadius: 4,
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.3)',
		flexDirection: 'row',
		marginVertical:  8
	},
	
	iconContainer: {
		width: '10%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 30
	},
	
	icon: {
		height: 20,
		width: 20,
		resizeMode: 'contain'
	},
	
	input: {
		width: '80%',
		height: 30 ,
		color: 'white'
	},
	
})

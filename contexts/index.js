import React, { createContext, useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native'
import GlobalContext from './GlobalContext.js';

export default function  GlobalContextProvider({ children }) {
	let [ screenWidth, setScreenWidth ] = useState(0);
	let [ screenHeight, setScreenHeight ] = useState(0);

	useEffect(() => {
		setScreenWidth(Dimensions.get('screen').width);
		setScreenHeight(Dimensions.get('screen').height);
	},[])
	return (
		<GlobalContext.Provider value={{screenWidth, screenHeight}}>
				{children}
		</GlobalContext.Provider>
	)

}


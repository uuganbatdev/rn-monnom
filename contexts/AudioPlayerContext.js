import React, { createContext, useContext, useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { TouchableOpacity, Text } from 'react-native';

let AudioPlayerContext = createContext();

function AudioPlayerContextProvider({ children }) {
	let [ sound, setSound ] = useState();

	let playSound = async (path) => {
		let { sound } = await Audio.Sound.createAsync({ uri: path });
		setSound(sound);
		await sound.playAsync();
	}

	useEffect(() => {
		return sound ? () => sound.unloadAsync() : undefined;
	},[sound])

	return (
		<AudioPlayerContext.Provider value={{
			sound,
			playSound,
			setSound
		}}>
			{children}
		</AudioPlayerContext.Provider>
	)
}

let useAudio = () => {
	let { sound, playSound, setSound } = useContext(AudioPlayerContext);


	let play = () => {
		sound.playAsync();
		sound.getStatusAsync().then(e => console.log(e));
	}

	let pause = () => {
		sound.pauseAsync();
	}

	let changeVolumeTo = (volume) => {
		sound.setStatusAsync({ volume });
	}

	return {
		sound,
		playSound,
		setSound,
		play,
		pause,
		changeVolumeTo,
	}
}

export {
	AudioPlayerContextProvider,
	useAudio
}

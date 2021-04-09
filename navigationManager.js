import React, {useEffect} from 'react';
import SignInScreen from './screens/authScreens/SignInScreen.js';
import ResetPasswordScreen from './screens/authScreens/ResetPasswordScreen.js';
import SignUpScreen from './screens/authScreens/SignUpScreen.js';
import GetCodeFromPhoneNumberScreen from './screens/authScreens/GetCodeFromPhoneNumberScreen.js';
import CheckCodeFromPhoneNumberScreen from './screens/authScreens/CheckCodeFromPhoneNumberScreen.js';
import AuthPhoneNumberScreen from './screens/authScreens/AuthPhoneNumberScreen.js';
import AuthDateScreen from './screens/authScreens/AuthDateScreen.js';
import AuthEmail from './screens/authScreens/AuthEmail.js';
import AuthPasswordScreen from './screens/authScreens/AuthPasswordScreen.js';
import IntroScreen from './screens/noFunctionalityScreens/IntroScreen.js';
import TutorialScreenOne from './screens/noFunctionalityScreens/TutorialScreenOne.js';
import TutorialScreenTwo from './screens/noFunctionalityScreens/TutorialScreenTwo.js';
import TutorialScreenThree from './screens/noFunctionalityScreens/TutorialScreenThree.js';
import WelcomeScreen from './screens/noFunctionalityScreens/WelcomeScreen.js';
import SearchScreen from './screens/SearchScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import SinglePodcastScreen from './screens/SinglePodcastScreen.js';
import SingleBookScreen from './screens/SingleBookScreen.js';
import MyLibraryScreen from './screens/MyLibraryScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Constants from 'expo-constants';


let AuthStack = createStackNavigator();
let HomeStack = createStackNavigator();
let SearchStack = createStackNavigator();
let ProfileStack = createStackNavigator();
let MyLibraryStack = createStackNavigator();
let Tabs = createBottomTabNavigator();
let RootStack = createStackNavigator();

let AuthStackScreen = () => {
	return (
		<AuthStack.Navigator headerMode='none'>
			<AuthStack.Screen name='intro' component={IntroScreen} />
			<AuthStack.Screen name='tutorialOne' component={TutorialScreenOne} />
			<AuthStack.Screen name='tutorialTwo' component={TutorialScreenTwo} />
			<AuthStack.Screen name='tutorialThree' component={TutorialScreenThree} />
			<AuthStack.Screen name='signIn' component={SignInScreen} />
			<AuthStack.Screen name='signUp' component={SignUpScreen} />
			<AuthStack.Screen name='authEmail' component={AuthEmail} />
			<AuthStack.Screen name='authPasswordScreen' component={AuthPasswordScreen} />
			<AuthStack.Screen name='authDateScreen' component={AuthDateScreen} />
			<AuthStack.Screen name='getCodeFromPhoneNumber' component={GetCodeFromPhoneNumberScreen} />
			<AuthStack.Screen name='checkCodeFromPhoneNumber' component={CheckCodeFromPhoneNumberScreen} />
			<AuthStack.Screen name='resetPassword' component={ResetPasswordScreen} />
			<AuthStack.Screen name='authPhoneNumber' component={AuthPhoneNumberScreen} />
			<AuthStack.Screen name='welcome' component={WelcomeScreen} />
		</AuthStack.Navigator>
	)
}

let HomeStackScreen = () => {
	return (
		<HomeStack.Navigator headerMode='none'>
			<HomeStack.Screen name='home' component={HomeScreen}  />
		</HomeStack.Navigator>
	)
}

let SearchStackScreen = () => {
	return (
		<SearchStack.Navigator headerMode='none'>
			<SearchStack.Screen name='search' component={SearchScreen} />
		</SearchStack.Navigator>
	)
}

let ProfileStackScreen = () => {
	return (
		<ProfileStack.Navigator headerMode='none'>
			<ProfileStack.Screen name='profile' component={ProfileScreen} />
		</ProfileStack.Navigator>
	)
}

let MyLibraryStackScreen = () => {
	return (
		<MyLibraryStack.Navigator headerMode='none'>
			<MyLibraryStack.Screen name='myLibrary' component={MyLibraryScreen} />
		</MyLibraryStack.Navigator>
	)
}

let TabsScreen = ({ navigation }) => {
	useEffect(() => {
		navigation.navigate('homeTab');
	},[])
	return (
		<Tabs.Navigator>
			<Tabs.Screen name='homeTab'  component={HomeStackScreen} />
			<Tabs.Screen name='libraryTab' component={MyLibraryStackScreen} />
			<Tabs.Screen name='profileTab' component={ProfileStackScreen} />
			<Tabs.Screen name='searchTab' component={SearchStackScreen} />
		</Tabs.Navigator>
	)
}

export default RootStackScreen = ({ navigation }) => {
	return (
		<RootStack.Navigator headerMode='none'>
			<RootStack.Screen name='mainApp' component={AuthStackScreen} />
		</RootStack.Navigator>
	)
}



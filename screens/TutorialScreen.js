import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import screen from '../screenWidthHeight.js';

export default function TutorialScreen({ route, navigation }) {
	let [ screenState, setScreenState ] = useState({
		gradientColor: ['#44025D', '#D87EF9'],
		circle: require('../assets/cast1.png'),
		logoText: require('../assets/cast2.png'),
		mainImg: require('../assets/cast3.png'),
		mainText:'Та хүссэн хүнийхаа хүссэн подкастыг шууд/live-аар сонсох эсвэл тухайн үед татаж авсанаар интернетгүй эвсэл сүлжээгүй аялалд явах гэх мэт тохиолдолд сонсох боломжтой.' 
	})

	useEffect(() => {
		console.log(route.params.tutorialPage);
		switch(route.params.tutorialPage) {
			case 2:
				setScreenState({
					gradientColor: ['#5E0081', '#6EC9EC'],
					circle: require('../assets/live1.png'),
					logoText: require('../assets/live2.png'),
					mainImg: require('../assets/live3.png'),
					mainText:'Та дуу сонсох, дуу хөгжим болон уран бүтээлчдээр ангилан дуу сонсох боломжтой ба тухайн үед татан авсанаар дараа нь интернетгүй үед сонсох боломжтой.' 
				});
				break;
			case 3:
				setScreenState({
					gradientColor: ['#5E0081', '#E231A3'],
					circle: require('../assets/nom1.png'),
					logoText: require('../assets/nom2.png'),
					mainImg: require('../assets/nom3.png'),
					mainText:'Манай онлайн номны үйлчилгээ нь ойролцоогоор 1000 гаруй онлайн болон унших хэлбэрээр байдаг бөгөөд та шууд сонсох эсвэл татан авч мөн адил интернетгүй үед уншиж сонсох боломжтой.' 
				});
				break;
		}
	},[])

	return (
		<View style={styles.container}>
			<LinearGradient colors={[screenState.gradientColor[0], screenState.gradientColor[1]]} style={styles.gradient}>
				<View style={styles.top} >
					<Image
						style={styles.circle}
						source={screenState.circle}
					/>
					<View style={styles.logoContainer} >
						<Image
							style={styles.logo}
							source={require('../assets/logo.png')}
						/>
						<Image
							style={styles.logoText}
							source={screenState.logoText}
						/>
					</View>
				</View>
				<View style={styles.bottom} >
					<Image
						style={styles.mainImg}
						source={screenState.mainImg}
					/>
					<Text style={styles.mainText}>
						{screenState.mainText}
					</Text>
					{
						route.params.tutorialPage != 3
							? (<TouchableOpacity
								style={styles.btn}
								onPress={() => navigation.push('tutorial', {tutorialPage: route.params.tutorialPage + 1})}
							>
								<Text style={styles.btnText} >
									Дараах
								</Text>
								<Image
									style={styles.arrowImg}
									source={require('../assets/arrow.png')}
								/>
							</TouchableOpacity>)
							: (<View style={styles.navBtnContainer} >
								<TouchableOpacity style={styles.authBtn} onPress={() => navigation.navigate('signIn')}>
									<Text style={styles.btnText} >
										Нэвтрэх
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.authBtn} onPress={() => navigation.navigate('signUp')}>
									<Text style={styles.btnText} >
										Бүртгүүлэх
									</Text>
								</TouchableOpacity>
							</View>)
					}
				</View>
			</LinearGradient>
		</View>
	)

}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	
	navBtnContainer: {
		marginTop: 30,
		flexDirection: 'row',
		width: 240,
		justifyContent: 'space-between',

	},
	
	circle: {
		position: 'absolute',
		width: screen.width,
		height: screen.width,
		resizeMode: 'contain',
		top: -screen.width / 4,
		left: -screen.height / 4
	},

	btnText: {
		color: 'white',
		fontWeight: '600',
	},

	btn: {
		alignSelf: 'flex-end',
		marginRight: 20,
		marginTop: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},

	arrowImg: {
		height: '60%',
		resizeMode: 'contain'
	},



	bottom: {
		width: '100%',
		alignItems: 'center',
	},

	mainImg: {
		height: '45%',
		resizeMode: 'contain',
	},

	mainText: {
		color: 'white',
		textAlign: 'center',
		width: 350,
		marginTop: 20
	},

	logo: {
		width: 100,
		height: 100
	},

	logoContainer: {
		margin: 30,
	},

	logoText: {
		width: 100,
		resizeMode: 'contain'
	},

	gradient: {
		width: '100%',
		height: '100%',
	},

})

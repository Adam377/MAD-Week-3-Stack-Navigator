//Week 3 Stack Navigator
import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home.js';
import Contact from './components/Contact.js';

const Stack = createStackNavigator();

class App extends Component
{
	constructor(props)
	{
		super(props);
	}
	
	render()
	{
		const navigation = this.props.navigation;
		
		return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Contact" component={Contact} />
			</Stack.Navigator>
		</NavigationContainer>
		);
	}
}

export default App;
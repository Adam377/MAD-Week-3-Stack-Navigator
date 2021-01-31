import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class Home extends Component
{
	render()
	{
		return(
			<View>
				<Text>Main</Text>
				
				<Button
					title = {"To Contact"}
					onPress = {() => this.props.navigation.navigate('Contact')}
				/>
			</View>
		);
	}
}

export default Home;
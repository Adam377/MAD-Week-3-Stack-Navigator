import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class Contact extends Component
{
	render()
	{
		return(
			<View>
				<Text>To contact us, use this email: adam@mail.co.uk</Text>
				
				<Button
					title = {"To Home"}
					onPress = {() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}

export default Contact;
import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
            <Text>Hello, Navigation!</Text>
            <Button
              onPress={() => navigate('Movie')}
              title="Chat with Lucy"
            />
        </View>
    )
  }
}

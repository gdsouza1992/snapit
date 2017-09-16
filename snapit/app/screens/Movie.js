import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class MovieScreen extends Component {
  static navigationOptions = {
    title: 'Movie',
  };
  render() {
    return (
        <View>
          <Text>Chat with Lucy</Text>
        </View>
    );
  }
}

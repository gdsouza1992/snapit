/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './app/index.js';

export default class snapit extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('snapit', () => snapit);

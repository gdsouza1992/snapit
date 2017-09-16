import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import MovieScreen from './screens/Movie';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Movie: { screen: MovieScreen },
});

export default App;

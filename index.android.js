import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  ScrollView
} from 'react-native';

import Routes from './src/Routes';

class hani extends Component {
  render() {
    return (
      <Routes />      
    );
  }
}




AppRegistry.registerComponent('hani', () => hani);

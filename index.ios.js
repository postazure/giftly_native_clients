'use strict';

import React from 'react-native'
let { AppRegistry, View } = React;
import styles from './stylesheets/application.js'

import Registration from './components/auth/registration'

class Giftly extends React.Component{
  render() {
    return (
      <View style={styles.view}>
        <Registration  styles={styles} />
      </View>
    );
  }
}

AppRegistry.registerComponent('giftly_native_client', () => Giftly);

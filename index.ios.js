'use strict';

import React from 'react-native'
let { AppRegistry, View } = React;
import styles from './stylesheets/application.js'

import Registration from './components/auth/registration'

class Giftly extends React.Component{
  constructor(props) {
    super(props);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.state = { currentUser: null };
  }

  setCurrentUser(user) {
    this.setState({currentUser: user});
  }

  render() {
    return (
      <View style={styles.view}>
        <Registration setCurrentUser={this.setCurrentUser} />
      </View>
    );
  }
}

AppRegistry.registerComponent('giftly_native_client', () => Giftly);

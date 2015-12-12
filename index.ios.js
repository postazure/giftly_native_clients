'use strict';

import React from 'react-native'
let { AppRegistry, View } = React;
import styles from './stylesheets/application.js'

import AuthService from './components/auth/auth_service'

class Giftly extends React.Component{
  constructor(props) {
    super(props);
    this.app_setCurrentUser = this.app_setCurrentUser.bind(this);
    this.state = { currentUser: null };
  }

  app_setCurrentUser(user) {
    this.setState({currentUser: user});
  }

  render() {
    return (
      <View style={styles.view}>
        <AuthService app_setCurrentUser={this.app_setCurrentUser} />
      </View>
    );
  }
}

AppRegistry.registerComponent('giftly_native_client', () => Giftly);

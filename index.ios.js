'use strict';

import React from 'react-native'
let { AppRegistry, Text, View } = React;
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
    if (!this.state.currentUser) {
      return this._viewAuth();
    }

    return (
      <View style={styles.view}>
        <Text>You are logged in</Text>
      </View>
    );
  }

  _viewAuth() {
    return (
      <View style={styles.view}>
        <AuthService app_setCurrentUser={this.app_setCurrentUser} />
      </View>
    )
  }
}

AppRegistry.registerComponent('giftly_native_client', () => Giftly);

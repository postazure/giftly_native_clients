'use strict';

import React from 'react-native'
let { View } = React;
import styles from '../../stylesheets/application.js'

import Link from '../application/link'
import Registration from './registration'

export default class AuthService extends React.Component{
  constructor(props) {
    super(props);
    this._showRegistration = this._showRegistration.bind(this);
    this._showSignIn = this._showSignIn.bind(this);

    this.state = { showRegistration: false };
  }

  _showRegistration(){
    this.setState({ showRegistration: true })
  }

  _showSignIn(){
    this.setState({ showRegistration: false })
  }

  render() {
    if (this.state.showRegistration) {
      return (
        <View>
          <Registration app_setCurrentUser={this.props.app_setCurrentUser} />
          <Link onPress={this._showSignIn}>Sign In</Link>
        </View>
      )
    } else {
      return (
        <View>
          <Link onPress={this._showRegistration}>Register</Link>
        </View>
      )
    }
  }
}


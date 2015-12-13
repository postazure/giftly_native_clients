'use strict';

import React from 'react-native'
let { Text, View } = React;
import styles from '../../stylesheets/application.js'

import Link from '../application/link'
import Registration from './registration'
import Signin from './signin'

export default class AuthService extends React.Component{
  constructor(props) {
    super(props);
    this._showRegistration = this._showRegistration.bind(this);
    this._showSignIn = this._showSignIn.bind(this);

    this.state = { showRegistration: false };
  }

  render() {
    if (this.state.showRegistration) {
      return this.registrationView()
    } else {
      return this.signInView()
    }
  }

  registrationView(){
    return (
      <View>
        <View style={styles.flexContainer}>
          <Registration app_setCurrentUser={this.props.app_setCurrentUser} />
        </View>
        <View style={styles.gutter}>
          <Text style={styles.instructions}>
            Have an account?
          </Text>
          <Link onPress={this._showSignIn}>Sign In</Link>
        </View>
      </View>
    )
  }

  signInView(){
    return(
      <View>
        <View style={styles.flexContainer}>
          <Signin app_setCurrentUser={this.props.app_setCurrentUser} />
        </View>
        <View style={styles.gutter}>
          <Text style={styles.instructions}>
            Need a new account?
          </Text>
          <Link onPress={this._showRegistration}>Register</Link>
        </View>
      </View>
    )
  }

  _showRegistration(){
    this.setState({ showRegistration: true })
  }

  _showSignIn(){
    this.setState({ showRegistration: false })
  }
}


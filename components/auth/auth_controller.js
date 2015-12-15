'use strict';

import React from 'react-native'
let { Text, View } = React;
import s from '../../stylesheets/application.js'

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
      <View style={s.view}>
        <View style={s.container}>
          <Text style={[s.h1, s.txt_c]}>Register</Text>
          <Registration app_setCurrentUser={this.props.app_setCurrentUser} />
        </View>
        <View style={s.mbxl}>
          <Text style={s.txt_c}>
            Have an account?
          </Text>
          <Link onPress={this._showSignIn}>Sign In</Link>
        </View>
      </View>
    )
  }

  signInView(){
    return(
      <View style={s.view}>
        <View style={s.container}>
          <Text style={[s.h1, s.txt_c]}>Sign In</Text>
          <Signin app_setCurrentUser={this.props.app_setCurrentUser} />
        </View>
        <View style={s.mbxl}>
          <Text style={s.txt_c}>
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


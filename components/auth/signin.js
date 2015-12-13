'use strict';

import React from 'react-native'
let { Text, TextInput, View } = React;
import styles from '../../stylesheets/application.js'
import Button from '../application/button'

export default class Signin extends React.Component{
  constructor(props) {
    super(props);
    this._sendSignin = this._sendSignin.bind(this);
    this._setValue = this._setValue.bind(this);
    this.state = {
      userEmail: '',
      userPassword: '',
      errorMsg: null
    };
  }

  _sendSignin(){
    let formData = JSON.stringify({
      user:{
        email: this.state.userEmail,
        password: this.state.userPassword
      }
    });

    fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: formData
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        let token = responseJSON.token;
        if (token) {
          this.props.app_setCurrentUser({email: this.state.userEmail, token: token})
        } else {
          this.setState({errorMsg: responseJSON.error});
        }
      })
      .catch((error) => {
        console.warn(error);
      })
      .done();
  }

  _setValue(obj) {
    let newState = Object.assign({}, obj, {errorMsg: null});
    this.setState(newState)
  }

  render() {
    let validRequireFields = (
      this.state.userEmail.trim() !== '' &&
      this.state.userPassword.trim() !== ''
    );

    return (
      <View>
        { this.state.errorMsg ? <Text style={styles.warning}>{this.state.errorMsg}</Text> : null }

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textField}
          placeholder="scott@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(txt) => this._setValue({userEmail: txt.trim()})}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(txt) => this._setValue({userPassword: txt})}
        />

        { validRequireFields ? <Button onPress={this._sendSignin}>Sign In</Button> : null }
      </View>
    );
  }
}


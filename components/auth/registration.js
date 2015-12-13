'use strict';

import React from 'react-native'
let { Text, TextInput, View } = React;
import styles from '../../stylesheets/application.js'
import Button from '../application/button'

export default class Registration extends React.Component{
  constructor(props) {
    super(props);
    this._sendRegistration = this._sendRegistration.bind(this);
    this._setValue = this._setValue.bind(this);
    this.state = {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmation: '',
      errorMsg: null
    };
  }

  _sendRegistration(){
    let formData = JSON.stringify({
      user:{
        email: this.state.userEmail,
        password: this.state.userPassword
      }
    });

    fetch('http://localhost:3000/registration', {
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
        this.setState({errorMsg: responseJSON.error})
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
    let validPassword = this.state.userPassword === this.state.userPasswordConfirmation;

    let validRequireFields = (
      this.state.userEmail.trim() !== '' &&
      this.state.userPassword.trim() !== '' &&
      this.state.userPasswordConfirmation.trim() !== ''
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
          onChangeText={(txt) => this._setValue({userEmail: txt})}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(txt) => this._setValue({userPassword: txt})}
        />
        <Text style={styles.label}>Password Confirmation</Text>

        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(txt) => this._setValue({userPasswordConfirmation: txt})}
        />
        { validPassword && validRequireFields ? <Button onPress={this._sendRegistration}>Register</Button> : null }
        { !validPassword ? <Text style={styles.warning}>Password and Password Confirmation don't match</Text> : null }
      </View>
    );
  }
}


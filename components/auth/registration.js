'use strict';

import React from 'react-native'
let { Text, TextInput, View } = React;
import styles from '../../stylesheets/application.js'
import Link from '../application/link'

export default class Registration extends React.Component{
  constructor(props) {
    super(props);
    this.sendRegistration = this.sendRegistration.bind(this);
    this.state = {
      userEmail: '',
      userPassword: '',
      userPasswordConfirmation: ''
    };
  }

  sendRegistration(){
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
      this.props.setCurrentUser({ email: this.state.userEmail, token: responseJSON.token })
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();
  }

  render() {
    let validPassword = this.state.userPassword === this.state.userPasswordConfirmation;

    let validRequireFields = (
      this.state.userEmail.trim() !== '' &&
      this.state.userPassword.trim() !== '' &&
      this.state.userPasswordConfirmation.trim() !== ''
    );

    return (
      <View style={styles.panel}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textField}
          placeholder="scott@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(txt) => this.setState({userEmail: txt})}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(txt) => this.setState({userPassword: txt})}
        />
        <Text style={styles.label}>Password Confirmation</Text>

        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(txt) => this.setState({userPasswordConfirmation: txt})}
        />
        { validPassword && validRequireFields ? <Link text="Register" onPress={this.sendRegistration} /> : null }
        { !validPassword ? <Text style={styles.warning}>Password and Password Confirmation don't match</Text> : null }
      </View>
    );
  }
}


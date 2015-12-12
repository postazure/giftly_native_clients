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
    debugger;
  }

  render() {
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
        <Link text="Register" onPress={this.sendRegistration} />
      </View>
    );
  }
}


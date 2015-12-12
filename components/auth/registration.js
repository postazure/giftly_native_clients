'use strict';

import React from 'react-native'
let { Text, TextInput, View } = React;

export default class Registration extends React.Component{
  render() {
    let styles = this.props.styles;

    return (
      <View style={styles.panel}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textField}
          placeholder="scott@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
        />
        <Text style={styles.label}>Password Confirmation</Text>
        <TextInput
          style={styles.textField}
          placeholder="password"
          secureTextEntry={true}
        />
      </View>
    );
  }
}


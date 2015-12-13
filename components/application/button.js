'use strict';

import React from 'react-native'
let { Text, TouchableHighlight } = React;
import styles from '../../stylesheets/application.js'

export default class Button extends React.Component{
  constructor(props){
    super(props);
    this._onPressButton = this._onPressButton.bind(this)
  }

  _onPressButton(){
    let args = this.props.args ? this.props.args : [];
    this.props.onPress(...args);
  }

  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
        <Text style={styles.buttonText} >{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}


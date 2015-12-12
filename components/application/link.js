'use strict';

import React from 'react-native'
let { Text, TouchableHighlight } = React;
import styles from '../../stylesheets/application.js'

export default class Link extends React.Component{
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
      <TouchableHighlight onPress={this._onPressButton}>
        <Text style={styles.link} >{this.props.children}</Text>
      </TouchableHighlight>
    );
  }
}


'use strict';

import React from 'react-native'
let { Text, TouchableHighlight, View } = React;
import s from '../../stylesheets/application.js'

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
    if (this.props.disabled) {
      return this.disabledButton();
    }


    return (
      <TouchableHighlight style={s.button} onPress={this._onPressButton}>
        <Text style={s.buttonText} >{this.props.children}</Text>
      </TouchableHighlight>
    );
  }

  disabledButton() {
    return (
      <View style={s.buttonDisabled}>
        <Text style={s.buttonText} >{this.props.children}</Text>
      </View>
    )
  }
}


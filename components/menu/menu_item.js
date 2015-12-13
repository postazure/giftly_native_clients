'use strict';

import React from 'react-native'
let { Text, TouchableHighlight } = React;
import s from '../../stylesheets/application.js'

export default class MenuItem extends React.Component{
  render() {
    return(
      <TouchableHighlight style={s.menuButton}
        onPress={this.props.onTap}>
        <Text style={s.menuButtonText}>{this.props.children}</Text>
      </TouchableHighlight>
    )
  }
}


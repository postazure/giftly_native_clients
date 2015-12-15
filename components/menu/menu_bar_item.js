'use strict';

import React from 'react-native'
let { Text, TouchableHighlight } = React;
import s from '../../stylesheets/application.js'

export default class MenuItem extends React.Component{
  render() {
    return(
      <TouchableHighlight style={s.menuButtonHeader}
        onPress={this.props.onTap}>
        <Text style={s.menuButtonTextHeader}>{this.props.children}</Text>
      </TouchableHighlight>
    )
  }
}


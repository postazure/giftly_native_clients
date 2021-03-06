'use strict';

import React from 'react-native'
let { View } = React;
import s from '../../stylesheets/application.js'

import Link from '../application/link'
import Item from './menu_bar_item'

export default class MenuBar extends React.Component{
  render() {
    let menuOptions = (this.props.actions||[]).map((action, i) => {
      return (
        <Item
          onTap={action.cb}
          key={i}
        >
          {action.name}
        </Item>
      )
    });

   return(
     <View>
       <View style={s.menuBar}>
         {menuOptions}
       </View>
     </View>
   )
  }
}


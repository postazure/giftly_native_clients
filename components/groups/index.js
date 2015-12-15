'use strict';

import React from 'react-native'
import moment from 'moment'
let { View, ListView, Text } = React;
import s from '../../stylesheets/application.js'
import Button from '../application/button'

export default class GroupIndex extends React.Component{
  render() {
    let groups = this.props.groups.map((group, i) => {
      return this.renderGroup(group, i);
    });

    return(
      <View>
        <Text style={[s.h1, s.txt_c, s.b]}>Groups Index</Text>
        <Text>{groups[0] ? groups[0].name : 'None'}</Text>
        {groups}
      </View>
    )
  }

  renderGroup(group, key){
    let dataAgo = moment(group.created_at).fromNow();
    return(
      <View style={[s.container_h, s.ai_s, s.jc_sb, s.pl]} key={key}>
        <Text style={s.h3}>{group.name}</Text>
        <Text style={s.h3}>{dataAgo}</Text>
      </View>
    )
  }
}



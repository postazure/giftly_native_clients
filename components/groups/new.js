'use strict';

import React from 'react-native'
import moment from 'moment'
let { View, TextInput, Text } = React;
import s from '../../stylesheets/application.js'
import Button from '../application/button'

export default class GroupIndex extends React.Component{
  constructor(props) {
    super(props);
    this._sendCreate = this._sendCreate.bind(this);
    this._setValue = this._setValue.bind(this);
    this.state = {
      groupName: '',
      errorMsg: null
    };
  }

  _setValue(obj) {
    let newState = Object.assign({}, obj, {errorMsg: null});
    this.setState(newState)
  }

  _sendCreate(){
    if (this.state.groupName.length > 0) {
      this.props.createGroup({name: this.state.groupName});
    } else {
      this.setState({errorMsg: 'Group name cannot be blank.'})
    }
  }

  render() {
    return(
      <View style={[s.container]}>
        <Text style={[s.h1, s.txt_c, s.b]}>New Group</Text>
        <Text style={s.warning}>{this.state.errorMsg}</Text>
        <Text style={s.label}>Group Name</Text>
        <TextInput
          style={s.textField}
          placeholder="Smiths 2015"
          onChangeText={(txt) => this._setValue({groupName: txt.trim()})}
        />
        <Button onPress={this._sendCreate}>Create Group</Button>
      </View>
    )
  }
}



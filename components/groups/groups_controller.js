'use strict';

import React from 'react-native'
let { View, Text, ListView } = React;
import s from '../../stylesheets/application.js'
import Menu from '../menu/menu_tray'
import Index from './index'
import New from './new'

export default class GroupsController extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Index',
      groups: []
    };
    this.getGroups();
    this.createGroup = this.createGroup.bind(this);
  }

  menuActions(){
    return [
      {name: 'Add Groups', view: 'New'},
    ];
  }

  view_Index(){
    return (
      <View style={s.view}>
        <Index groups={this.state.groups}/>
      </View>
    );
  }

  view_New(){
    return (
      <View style={s.view}>
        <New createGroup={this.createGroup}/>
      </View>
    );
  }

  getGroups() {
    fetch('http://localhost:3000/groups',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Token': this.props.currentUser.token
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this._setGroups(responseData);
    })
    .done();
  }

  createGroup(data) {
    let formData = JSON.stringify({ group: data })

    fetch('http://localhost:3000/groups',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Token': this.props.currentUser.token
      },
      body: formData
    })
    .then((response) => response.json())
    .then((responseData) => {
      this._addGroup(responseData, this._setCurrentView('Index'))
    })
    .done();
  }

  _addGroup(newGroup, cb) {
    let groups = Object.assign([], this.state.groups);
    this._setGroups(groups.concat(newGroup), cb)
  }

  _setGroups(groups, cb) {
    this.setState({ groups: groups }, cb);
  }

  _setCurrentView(view) {
    this.setState({currentView: view});
  }

  _getCurrentView() {
    return this[`view_${this.state.currentView}`]()
  }

  _getMenuActions(){
    let actions = this.menuActions();
    return actions.map((action) => {
      return ({
        name: action.name,
        cb: (this._setCurrentView.bind(this, action.view))
      })
    });
  }

  render() {
    let currentView = this._getCurrentView();
    let menu = this._getMenuActions();

    return (
      <View style={s.body}>
        {currentView}
        <Menu actions={menu}/>
      </View>
    );
  }
}


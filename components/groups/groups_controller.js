'use strict';

import React from 'react-native'
let { View } = React;
import s from '../../stylesheets/application.js'
import Menu from '../menu/menu_tray'
import Index from './index'
import New from './new'
import ApiClient from '../../app/api_client'
let apiClient = ApiClient.est();

export default class GroupsController extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      currentView: 'Index',
      groups: []
    };
    this.fetchGroups();

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

  fetchGroups(){
    apiClient.get({resource: 'groups'},
      this._setGroups.bind(this)
    )
  }

  createGroup(data) {
    apiClient.post({
        resource: 'groups'
      },
      { group: data },
      this._addGroup.bind(this)
    );
  }

  _addGroup(newGroup) {
    let groups = Object.assign([], this.state.groups);
    this._setGroups(groups.concat(newGroup),
      this._setCurrentView.bind(this, 'Index')
    );

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


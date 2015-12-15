'use strict';

import React from 'react-native'
let { AppRegistry, Text, View } = React;
import s from './stylesheets/application.js'

import AuthController from './components/auth/auth_controller'
import MenuBar from './components/menu/menu_bar'
import GroupsController from './components/groups/groups_controller'

class Giftly extends React.Component{
  constructor(props) {
    super(props);
    this.app_setCurrentUser = this.app_setCurrentUser.bind(this);
    this.state = {
      currentUser: {email: 'm@m.com', token: 'rE43TLcbUgKK4mT8nbvMudc8'},
      //currentUser: null,
      currentView: 'Groups'
    };
  }

  view_AuthController(){
    return (
      <View style={s.body}>
        <AuthController app_setCurrentUser={this.app_setCurrentUser} />
      </View>
    );
  }

  view_Groups(){
    return (
      <View style={s.view}>
        <GroupsController currentUser={this.state.currentUser} />
      </View>
    );
  }

  view_Bar(){
    return (
      <View style={s.view}>
        <Text>You are Bar.</Text>
      </View>
    );
  }

  menuActions(){
    return [
      {name: 'Groups', view: 'Groups'},
      {name: 'bar', view: 'Bar'},
    ];
  }

  render() {
    let currentView = this.getCurrentView();
    let menuBarActions = this.getMenuActions();

    return (
      <View style={s.body}>
        {this.state.currentUser ? <MenuBar actions={menuBarActions}/> : null }
        {currentView}
      </View>
    );
  }

  app_setCurrentUser(user) {
    this.setState({currentUser: user});
  }

  app_setCurrentView(view) {
    this.setState({currentView: view});
  }

  getCurrentView() {
    if (!this.state.currentUser) {return this.view_AuthController()}
    return this[`view_${this.state.currentView}`]()
  }

  getMenuActions(){
    let actions = this.menuActions();
    return actions.map((action) => {
      return ({
        name: action.name,
        cb: (this.app_setCurrentView.bind(this, action.view))
      })
    });
  }
}

AppRegistry.registerComponent('giftly_native_client', () => Giftly);

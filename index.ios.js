'use strict';

import React from 'react-native'
let { AppRegistry, Text, View } = React;
import styles from './stylesheets/application.js'

import AuthService from './components/auth/auth_service'
import MenuBar from './components/menu/menu_bar'

class Giftly extends React.Component{
  constructor(props) {
    super(props);
    this.app_setCurrentUser = this.app_setCurrentUser.bind(this);
    this.state = {
      currentUser: {email: 'foo@bar.com', token: '123456'},
      currentView: 'Groups'

    };
  }

  _viewAuthService(){
    return (
      <View style={styles.body}>
        <AuthService app_setCurrentUser={this.app_setCurrentUser} />
      </View>
    );
  }

  _viewGroups(){
    return (
      <View style={styles.view}>
        <Text>You are Groups.</Text>
      </View>
    );
  }

  _viewBar(){
    return (
      <View style={styles.view}>
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
      <View style={styles.body}>
        {currentView}
        {this.state.currentUser ? <MenuBar actions={menuBarActions}/> : null }
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
    if (!this.state.currentUser) {return this._viewAuthService()}
    return this[`_view${this.state.currentView}`]()

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

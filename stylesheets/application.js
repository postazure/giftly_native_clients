import React from 'react-native'
let { StyleSheet } = React;

let stylesheets = Object.assign({},
  require('./typography.js'),
  require('./containers.js'),
  require('./inputs.js')
);

export default StyleSheet.create(stylesheets);



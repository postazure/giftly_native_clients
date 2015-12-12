import { StyleSheet } from 'react-native'

let stylesheets = Object.assign({},
  require('./typography.js'),
  require('./containers.js'),
  require('./inputs.js')
);

export default StyleSheet.create(stylesheets);



let c = require('./colors');

module.exports = {
  link: {
    fontSize: 18,
    textAlign: 'center',
    color: '#1AD6FD',
  },

  button: {
    backgroundColor: '#1AD6FD',
    marginTop: 20,
    marginBottom: 20,
    padding: 20,
  },

  buttonText:{
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  menuButton: {
    flex: 1,
    backgroundColor: c.creamy_yellow,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  menuButtonText: {
    fontWeight: '600',
    fontSize: 18,
    color: c.dark_tan,
  }
}
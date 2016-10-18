const endpoints = require('../endpoints');

class Client {
  constructor(clientID, accessToken = null) {
    this.setClientID(clientID);
    this.setAccessToken(accessToken);

    this.album = new (require('./album'))(this);
  }

  setClientID(clientID) {
    if (!clientID) throw new Error('A Client requires a clientID to function.');
    this.clientID = clientID;
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }
}

module.exports = Client;

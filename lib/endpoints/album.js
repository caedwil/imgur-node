const request = require('../request');

module.exports = {
  get: function(clientID, albumID, callback) {
    let args = {
      clientID: clientID,
      method: 'GET',
      path: `/album/${albumID}`
    };
    request(args, callback);
  }

  getImages: function(clientID, albumID, callback) {
    let args = {
      clientID: clientID,
      method: 'GET',
      path: `/album/${albumID}/images`
    };
    request(args, callback);
  }
};

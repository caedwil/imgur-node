const album = require('../endpoints/album');

class Album {
  constructor(client) {
    this.client = client;
  }

  get(albumID, callback) {
    album.get(this.client.clientID, albumID, callback);
  }
}

module.exports = Album;

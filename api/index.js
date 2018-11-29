const fetch = require('node-fetch');

class API {
  constructor() {
    this.host = process.env.API_HOST;
  }

  async get(objectName, id) {
    let json;

    try {
      const fetchPromise = await fetch(`${this.host}/${objectName}/${id}`, { method: 'get' });
      const jsonPromise = await fetchPromise.json();
      json = await jsonPromise;
    } catch (error) {
      return error;
    }

    return json;
  }
}

module.exports = new API();

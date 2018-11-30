const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

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

  async insert(objectName, body) {
    const fetchPromise = await fetch(`${this.host}/${objectName}`, {
      method: 'post',
      body: new URLSearchParams(body),
      /*headers: {
        token: '$2b$10$cVkJa3Nr1fx1bpaq4zn1.OyLxgVt3dPtuDjih5rzEJxMOMJLq.QbS', // Do something about this
      },*/
    });
    const jsonPromise = await fetchPromise.json();
    const json = await jsonPromise;

    if (json.status === 409 || json.status === 401) {
      throw json;
    }

    return json;
  }
}

module.exports = new API();

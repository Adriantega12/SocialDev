const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

class API {
  constructor() {
    this.host = process.env.API_HOST;
  }

  async get(route, id) {
    let json;

    try {
      const fetchPromise = await fetch(`${this.host}/${route}/${id}`, { method: 'get' });
      const jsonPromise = await fetchPromise.json();
      json = await jsonPromise;
    } catch (error) {
      return error;
    }

    return json;
  }

  async insert(route, body) {
    const fetchPromise = await fetch(`${this.host}/${route}`, {
      method: 'post',
      body: new URLSearchParams(body),
      /*headers: {
        token: '$2b$10$P5pvSCYoYqA8BQTJGHKG.6BVpxmOvfHdvmZK1i5z6P7d0P5ej1a', // Do something about this
      },*/
    });
    const jsonPromise = await fetchPromise.json();
    const json = await jsonPromise;

    if (json.status === 409 || json.status === 401) {
      throw json;
    }

    return json;
  }

  async update(route, body, id) {
    const fetchPromise = await fetch(`${this.host}/${route}/${id}`, {
      method: 'put',
      body: new URLSearchParams(body),
      /*headers: {
        token: '$2b$10$P5pvSCYoYqA8BQTJGHKG.6BVpxmOvfHdvmZK1i5z6P7d0P5ej1a', // Do something about this
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

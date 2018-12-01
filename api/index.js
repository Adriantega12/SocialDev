const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

class API {
  constructor() {
    this.host = process.env.API_HOST;
  }

  async get(route, id) {
    let json;
    let status;

    try {
      const response = await fetch(`${this.host}/${route}/${id}`, { method: 'get' });
      status = await response.status;
      const jsonPromise = await response.json();
      json = await jsonPromise;
    } catch (error) {
      return error;
    }

    return {
      status,
      response: json,
    };
  }

  async insert(route, body) {
    const response = await fetch(`${this.host}/${route}`, {
      method: 'post',
      body: new URLSearchParams(body),
      /*headers: {
        token: '$2b$10$P5pvSCYoYqA8BQTJGHKG.6BVpxmOvfHdvmZK1i5z6P7d0P5ej1a', // Do something about this
      },*/
    });
    const status = await response.status;
    const jsonPromise = await response.json();
    const json = await jsonPromise;

    return {
      status,
      response: json,
    };
  }

  async update(route, body, id) {
    const response = await fetch(`${this.host}/${route}/${id}`, {
      method: 'put',
      body: new URLSearchParams(body),
      /*headers: {
        token: '$2b$10$P5pvSCYoYqA8BQTJGHKG.6BVpxmOvfHdvmZK1i5z6P7d0P5ej1a', // Do something about this
      },*/
    });
    const status = await response.status;
    const jsonPromise = await response.json();
    const json = await jsonPromise;

    return {
      status,
      response: json,
    };
  }

  async delete(route, id) {
    const response = await fetch(`${this.host}/${route}/${id}`, {
      method: 'delete',
      headers: {
        token: '$2b$10$3hhneboOPKFqEj1sOnkSeiHdXSp7bROt55upsKX1JfFwXvgZrgu', // Do something about this
      },
    });
  }

  async login(email, password) {
    const response = await fetch(`${this.host}/auth/login`, {
      method: 'post',
      body: new URLSearchParams({ email, password }),
    });
    const status = await response.status;
    const jsonPromise = await response.json();
    const json = await jsonPromise;

    return {
      status,
      response: json,
    };
  }
}

module.exports = new API();

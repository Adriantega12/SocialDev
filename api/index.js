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
      const response = await fetch(`${this.host}/${route}/${id}`, {
        method: 'get',
      });
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

  async insert(route, body, token = undefined) {
    const response = await fetch(`${this.host}/${route}`, {
      method: 'post',
      body: new URLSearchParams(body),
      headers: {
        token,
      },
    });
    const status = await response.status;
    const jsonPromise = await response.json();
    const json = await jsonPromise;

    return {
      status,
      response: json,
    };
  }

  async update(route, body, id, token = undefined) {
    const response = await fetch(`${this.host}/${route}/${id}`, {
      method: 'put',
      body: new URLSearchParams(body),
      headers: {
        token,
      },
    });
    const status = await response.status;
    const jsonPromise = await response.json();
    const json = await jsonPromise;

    return {
      status,
      response: json,
    };
  }

  async delete(route, id, token = undefined) {
    const response = await fetch(`${this.host}/${route}/${id}`, {
      method: 'delete',
      headers: {
        token,
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

  async logout(token) {
    const response = await fetch(`${this.host}/auth/logout`, {
      method: 'get',
      headers: {
        token,
      },
    });
    const status = await response.status;
    const jsonPromise = await response.json();
    const json = await jsonPromise;
    return {
      status,
      response: json,
    };
  }

  async activeSession(token) {
    const response = await fetch(`${this.host}/auth/session`, {
      method: 'get',
      headers: {
        token,
      },
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

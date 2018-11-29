class API {
  constructor() {
    this.host = process.env.API_HOST;
  }

  async get(objectName, id) {
    const fetchPromise = fetch(`${this.host}/${objectName}/${id}`);
    return fetchPromise;
  }
}

module.exports = new API();

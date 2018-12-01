const api = require('../api');

class User {
  constructor({
    id,
    roleId,
    email,
    password,
    githubToken,
    firstName,
    lastName,
    age,
    level,
    profilePic,
  }) {
    this.id = id;
    this.roleId = roleId;
    this.email = email;
    this.password = password;
    this.githubToken = githubToken;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.level = level;
    this.profilePic = profilePic;
  }

  static async getAll() {

  }

  static async get(userId) {
    let data;

    try {
      data = await api.get('users', userId);
    } catch (error) {
      throw error;
    }

    return data;
  }

  /*static async insert(user) {
    let data;

    try {
      data = await api.insert('users', user);
    } catch (error) {
      throw error;
    }

    return data;
  }*/

  static async update(keyVals, token) {
    let data;
    try {
      data = await api.update('users', keyVals, keyVals.id, token);
    } catch (error) {
      throw error;
    }

    return data;
  }

  static async delete(postId, token) {
    try {
      await api.delete('users', postId, token);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;

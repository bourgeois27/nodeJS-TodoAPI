module.exports = class User {
  constructor(userId) {
    this.userId = userId;
    this.tasks = [];
  }
  getTasks() {
    return this.tasks;
  }
  getUserId() {
    return this.userId;
  }
}
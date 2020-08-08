const Employee = require("./Employee")

class Enginner extends Employee {
  constructor(name, id, email, github) {
    // super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;